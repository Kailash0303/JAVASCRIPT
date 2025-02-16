
const getPromise = () => {
   return new Promise((resolve , reject ) =>{
        console.log("I am a promise");
        // resolve("success");
        // reject("error")
    });
}

let promise = getPromise();

promise.then((res) =>{
    console.log("promise fulfilled :" , res);
});

promise.catch((err) =>{
    console.log("rejected :" ,err);
    
});





/*
// <-- part 1 -->

let promise = new Promise( (resolve , reject) =>{
    console.log("i am a promise!");
    // resolve("successful");
    reject("An error occured ! Please Resolve it")
    
});




function getData(dataId , getNextData){

    return new Promise((resolve , reject) => {
        setTimeout( () => {
            console.log("data :",dataId);
            resolve("success");
            // reject("failed");
            if(getNextData){
                getNextData();
            }
            },5000);
    });
}

*/