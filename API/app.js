// using api
//only for commit 2/3/25
//only for commit 2/3/25 -2

//only for commit 3/3/25 -1
//only for commit 3/3/25 -2
//only for commit 3/3/25 -3

//only for commit 4/3/25 -1
//only for commit 4/3/25 -2
//only for commit 4/3/25 -3

//only for commit 5/3/25 -1
//only for commit 5/3/25 -2
//only for commit 5/3/25 -3

//only for commit 6/3/25 -1
//only for commit 6/3/25 -2

//only for commit 7/3/25 -1
//only for commit 7/3/25 -2

//only for commit 8/3/25 -1
//only for commit 8/3/25 -2
//only for commit 8/3/25 -3

//only for commit 9/3/25 -1
//only for commit 9/3/25 -2

//only for commit 10/3/25 -1
//only for commit 10/3/25 -2
//only for commit 10/3/25 -3


//only for commit 11/3/25 -1
//only for commit 11/3/25 -2

//only for commit 14/3/25 -1
//only for commit 14/3/25 -2
//only for commit 14/3/25 -3

//only for commit 15/3/25 -1
//only for commit 15/3/25 -2
//only for commit 15/3/25 -3

//only for commit 16/3/25 -1
//only for commit 16/3/25 -2
//only for commit 16/3/25 -3

//only for commit 17/3/25 -1
//only for commit 17/3/25 -2
//only for commit 17/3/25 -3

//only for commit 18/3/25 -1
//only for commit 18/3/25 -2
//only for commit 18/3/25 -3

//only for commit 19/3/25 -1
//only for commit 19/3/25 -2
//only for commit 19/3/25 -3

//only for commit 20/3/25 -1
//only for commit 20/3/25 -2
//only for commit 20/3/25 -3

//only for commit 21/3/25 -1
//only for commit 21/3/25 -2
//only for commit 21/3/25 -3





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
