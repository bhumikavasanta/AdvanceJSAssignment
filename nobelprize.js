import fetch from "node-fetch"

const url = "https://api.nobelprize.org/v1/prize.json"
async function loadData(){
    const response=await fetch(url)
    const result=await response.json()
    let arr = result.prizes.filter(obj => obj.year>=2000 && obj.year<=2019);
    let arr2 = arr.filter(obj => obj.category=='chemistry');
    return arr2;
    // console.log(categories);
}

loadData().then(
    (response)=>{
        console.log(response)
    }
).catch((error)=>{
    console.log(error)
})