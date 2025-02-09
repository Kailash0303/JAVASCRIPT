/*
/*
let marks=[97,98,96,25,41];
// marks=[97,98,596,878,898,646,64,64,697,25,41];

marks[0]=100;

console.log(marks);
console.log(marks.length);  // length is aproperty

*/

/* 
let heros=["ironman" , "batman" , "spiderman" , "dr.strange"];

//for loop
console.log("-------for loop---------");
for(let i=0 ; i<heros.length ; i++){
    console.log(heros[i]);
}

console.log("-------for of loop---------");

//for of 
for(let el of heros)
{
    console.log(el.toUpperCase());
    
}

*/

/*  //for loop 2
for(let i=1 ; i<=heros.length ; i++){
    console.log(heros[i-1]);
}

//1  : 1-1 =0
//2  : 2-1 =1
//3  : 3-1 =2
*/










// -----array methods 
/*
let food=["apple" ,"potato" , "banana" , "chips"];
console.log(food);


console.log("----- push() -----");

food.push("panner")
console.log(food);

food.push("panner" , "piza" , "burger")
console.log(food);

console.log("----- pop() -----");
let deleted= food.pop();
console.log(food);
console.log("deleted item :" ,deleted);

console.log("----- tostring() -----");
console.log(food.toString());
console.log(food);


let marks=[97,85,65,25,31,18];


console.log("----- concat() -----");

let marvel=["iron man" , "thor" , "spiderman" , "hulk"];
let dc=["batman" , "dcman"];
let indian=["shaktiamn" , "kirsh"];

let heros=marvel+dc+indian; //one way
console.log(heros);

let heros2=marvel.concat(dc , indian)  //second way
console.log(heros2);





let marvel=["iron man" , "thor" , "spiderman" , "hulk"];


marvel.unshift("antman")
console.log(marvel);

let d1=marvel.shift();
console.log(d1);
console.log(marvel);

*/

/*
let str="kailash";
console.log(str.slice(0,5));  //kaila
*/