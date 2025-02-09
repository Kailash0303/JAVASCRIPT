// let r=prompt("hello")
// console.log(r);
/*
//p1
let num =prompt("enter num : ");

if(num%5===0){
    console.log(num , "is a multiple of 5" );
}else{
    console.log(num , "is NOT a multiple of 5" );
}
*/

//p2
let score=prompt("enter score : ");

if(score>=80 && score<=100){
    console.log("A");
    
}
else if(score>=70 && score<=79){
    console.log("B");
}
else if(score>=60 && score<=69){
    console.log("C");
}
else if(score>=50 && score<=59){
    console.log("D");
}
else if(score>=0 && score<=49){
    console.log("F");
}
else{
    console.log("enter valid score");
    
}