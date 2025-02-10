//practise set 6


//Q1
function vowelcount(str){
    
    let count=0;
    let str2 = str.toLowerCase();

    for(let i =0 ; i<str.length ; i++){

        if(str2[i] == "a"|| str2[i] == "e" || str2[i] == "i" || str2[i] == "o" || str2[i] == "u" ){
            count++;
        }
    }
    
    return count;
}
console.log(vowelcount("AEIOU"));

//Q2

let arrowcount =(str)=>{

    let count=0;
    let str2 = str.toLowerCase();
    for(let i =0 ; i<str.length ; i++){

        if(str2[i] == "a"|| str2[i] == "e" || str2[i] == "i" || str2[i] == "o" || str2[i] == "u" ){
            count++;
        }
    }
    return count;
}

console.log(arrowcount("kaialsh"));











// //Q1
// function vowelcount(str){
    
//     let count=0;
//     let str2 = str.toLowerCase();
//     // console.log(str2);

//     /* using for of loop
//     for(let char of str2){
//         if(char === "a"|| char === "e" || char === "i" || char === "o" || char === "u" ){
//             count++; 
//     }
//     }*/


//     /*
//     //using for loop
//     for(let i =0 ; i<str.length ; i++){

//         if(str2[i] == "a"|| str2[i] == "e" || str2[i] == "i" || str2[i] == "o" || str2[i] == "u" ){
//             count++;
//         }
//     }*/
//     // console.log(v);
    
//     return count;
// }
// console.log(vowelcount("AEIOU"));

// 