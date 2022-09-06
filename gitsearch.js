import fetch from "node-fetch"
var input_text = "how to install node"
var url = `https://api.github.com/search/repositories?q=node`

var result = {
    name:"",
    full_name: "",
    private:false,
    owner:{
          login:"",
        name:"",
            followersCoun:"",
            followingCount:"",
        },
       licenseName:"",
       score:"score",
       numberOfBranch:""
       
}


const  getResult = async () =>{

    const data= await fetch(url)
    .then((data)=>data.json())
    .then( async (data)=>{
        console.log(data)
        let item = data.items[0]
        result.name = item.name
        result.full_name = item.full_name
        result.private = item.private
        fetch (item.owner.url)
        .then(data=>{
            return data.json()})
        .then(data2=>{
            result.owner.login = data2.name
            result.owner.followersCoun = data2.followers
            result.owner.followingCount = data2.following
            
        })
        result.licenseName = item.license.name
        result.score = item.score
        result.numberOfBranch = await fetch(item.branches_url.replace("{/branch}",""))
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            return Object.keys(data).length
        })
    })
    return result
}




getResult().then(data=>console.log(result))