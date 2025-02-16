const hello = ()=>{
    console.log("hello");
}

setTimeout(hello , 3000)



/* 
// sync programming 
// <-- part 1-->
console.log("one");
console.log("two");
console.log("three");
*/

/*
// <-- part 2-->
function hello(){
        console.log("hello");
}

setTimeout(hello ,2000);
*/

/*
// <-- part 3 -->
console.log("one");
console.log("two");

//1s =1000ms
setTimeout(()=>{
    console.log("hello"); 
},400);

console.log("three");
console.log("four");
*/

/* 
// <-- part 4-->
function sum (a, b){
    console.log(a+b);
}

function cal (a , b ,sumcallback){
    sumcallback(a,b);
}

cal(1 , 20 , sum);

*/