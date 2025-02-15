/*
//print 10 times
for(let i =0 ;i <10 ; i++){
    console.log("kailash");   
}

//calculate sum
let sum=0;
for(let i =0 ;i <10 ; i++){
    sum=sum+i;
}
console.log("sum is :",sum);

//while loop

let i=1;
while(i<=5){
    console.log("i is :",i);
    i++;
}

//do while loop
let j =20
do {
    console.log("j is :",j);
    j++;
} while (j<=10);



//for of loop

let str="JavaScript";
let size=0;
// let size=0;
for(let val of str){  //val-->iterator
    console.log("val =",val);
    size++;

}
console.log("size of string:",size);
*/

//for in loop

let student ={
    name:"kailash Tak",
    age:20,
    cgpa:9,
    isPass:true
};

for(let key in student)
{
    console.log("key :",key , "value :",student[key]);
    
}