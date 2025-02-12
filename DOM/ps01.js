/*
//Q1
let ele=document.querySelector("h2");
console.dir(ele);

ele.innerText = ele.innerText + " apna college"; 
*/

//Q2

let divs = document.querySelectorAll(".box");

let idx=1;

//1st method
for (let i of divs) {
    // console.log(i.innerText);
    i.innerHTML=`uni div ${idx}`;    
    idx++;
}

// 2nd method
// divs[0].innerText="unquie div 1";
// divs[1].innerText="unquie div 2";
// divs[2].innerText="unquie div 3";