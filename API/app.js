// using api
//only for commit 2/3/25
const URL = "https://cat-fact.herokuapp.com/facts";

//async function
const getFacts =async ()=>{
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);          //Json format
    console.log("response status:",response.status);
};


// let promise =fetch(URL);
// console.log(promise);
