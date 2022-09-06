import fetch from "node-fetch"

const url = "https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json"
async function loadData(){
    const response=await fetch(url)
    const result=await response.json()
    let arr = result.filter(obj => {
        // console.log(obj.Statistics.Flights.Cancelled,obj.Statistics.Flights.Delayed,obj.Statistics.Flights.Diverted,obj.Statistics.Flights["On Time"]); 
        return obj.Statistics.Flights.Cancelled+obj.Statistics.Flights.Delayed+obj.Statistics.Flights.Diverted+obj.Statistics.Flights["On Time"]==obj.Statistics.Flights.Total});
    return arr;
}

loadData().then(
    (response)=>{
        console.log(response.length)
    }
).catch((error)=>{
    console.log(error)
})