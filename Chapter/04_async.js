function asyncFunc1(){
    return new Promise((resolve, reject ) =>{
        setTimeout(() =>{
            console.log("data1");
            resolve("success");
        } , 4000);
    });
};

function asyncFunc2(){
    return new Promise((resolve, reject ) =>{
        setTimeout(() =>{
            console.log("data2");
            resolve("success");
        } , 4000);
    });
};


//2nd methid 
//it will print data one after other i.e 
//i.e it will print data 1 first and then data 2 each after 4 sec interval

 
// method 2 --> way 1
console.log("fetching data1...");
let p1 = asyncFunc1();
p1.then((res) =>{
    console.log("fetching data2...");
    let p2 = asyncFunc2();
    p2.then((res) =>{});
});

/*

// method 2 --> way 2
console.log("fetching data1...");
asyncFunc1().then((res) =>{
    console.log("fetching data2...");
    asyncFunc2().then((res) =>{});
});


*/





/*

// It will print data at a time i.e after 4 seconds
//method 1 

console.log("fetching data1...");
let p1 = asyncFunc1();
p1.then((res) =>{
    console.log(res);
});


console.log("fetching data2...");
let p2 = asyncFunc2();
p2.then((res) =>{
    console.log(res);
});


*/




/*
<-- part 1-->
function asyncFunc(){
    return new Promise((resolve, reject ) =>{
        setTimeout(() =>{
            console.log("data1");
            resolve("success");
        } , 4000);
    });
};

console.log("fetching data1...");

let p1 = asyncFunc();
p1.then((res) =>{
    console.log(res);
})

*/