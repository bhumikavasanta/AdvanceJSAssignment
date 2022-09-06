const data = require('./battles.json');
// console.log(data);

const getMostActive = (para)=>{
    let result = {};
    let max = 0
    let key;
    data.forEach((war) => {
        result[war[para]] = (result[war[para]] ? result[war[para]] + 1  : 1);
        
    });
    for (something in result){
        if (result[something] > max){
            max = result[something] 
            key = something 
        }
    }
    // console.log(result)
    return key
}

console.log("Most Active:");
console.log("Attacker King: "+getMostActive("attacker_king"));
console.log("Defender King: "+getMostActive("defender_king"));
console.log("Region: "+getMostActive("region"));
console.log("Name: "+getMostActive("name"));


let wins = 0;
let loss = 0;

for(a of data){
    if(a.attacker_outcome=="win"){
        wins++;
    }
    else {
        loss++;
    }
}
console.log("Total wins = "+wins);
console.log("Total losses = "+loss);

let myset = new Set();
for(i of data){
    myset.add(i.battle_type)
}
console.log(myset)

let min = 0, max = 0, sum = 0, num = 0;
for(x of data){
    num++;
    if(x.defender_size>max){
        max = x.defender_size;
    }
    if(x.defender_size<min){
        min = x.defender_size;
    }
    sum = sum + x.defender_size;
}
let avg = sum/num;
console.log("Average = "+avg);
console.log("Minimum = "+min);
console.log("Maximum = "+max);
