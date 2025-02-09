/*
let marks=[97,98,96,25,41];
// marks=[97,98,596,878,898,646,64,64,697,25,41];

marks[0]=100;

console.log(marks);
console.log(marks.length);  // length is aproperty

*/

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



/*  //for loop 2
for(let i=1 ; i<=heros.length ; i++){
    console.log(heros[i-1]);
}

//1  : 1-1 =0
//2  : 2-1 =1
//3  : 3-1 =2
*/