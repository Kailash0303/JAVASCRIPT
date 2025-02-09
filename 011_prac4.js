console.log("practise set 4");

/*
//p1
let marks=[85,97,44,37,76,60];
let sum=0;

for(let i =0 ;i<marks.length ;i++){
    sum=sum+marks[i];
}

console.log("total marrks :",sum);

//avg marks

let avg=sum/marks.length;
console.log("avg is ",avg);
console.log(`avg marks of clas is : ${avg}`);

*/

//p2

let prices=[250,645,300,900,50];

for (let element of prices) {
    element=element-(element-(10/100));
}

console.log(prices);


let items=[250,645,300,900,50];

let i=0;

for (let val of items) {
    
    // console.log(`value at indes ${i} =${val}`);
    let offer=val / 10;
    items[i]=items[i]-offer;
    console.log(`value ater offer : ${items[i]}`);
    i++;
    
}