/*
let arr=[1,2,3,4,5];


//func as parameter to func
arr.forEach(function printval(val){
    console.log(val); 
});

// using arrowfunctions
console.log("---- using arrowfunctions ----");
let arr2=["pune" , "mumbai" , "delhi"]
arr2.forEach((val) => {
    console.log(val.toUpperCase());
})

console.log("---- using arrowfunctions PART 2 ----");
let arr3=["pune" , "mumbai" , "delhi"]
arr3.forEach((val , idx , arr) => {
    console.log(val.toUpperCase() , idx , arr);
})


*/
//practise question 

let array=[1,2,3,4,5,6];
/*
//one way
array.forEach((val) =>{
    console.log(val*val);
});
*/

//second way
const calSquare = (val) =>{
    console.log(val*val);
};

array.forEach(calSquare);


