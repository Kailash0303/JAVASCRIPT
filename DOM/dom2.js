/*
DOM Manipulation

1)---- Attributes ---
getAttribute("class / id / name ")
p.setAttribute("class" , "123");
                //attribute to change  // new value

console.log("---- for div ----");
let div=document.querySelector("div");
console.log(div);

let id =div.getAttribute("id")
console.log(id);

let classs = div.getAttribute("class");
console.log(classs);

console.log("---- for p ----");

let p =document.querySelector("p");
console.log(p);

console.log(p.getAttribute("class"));
p.setAttribute("class" , "123");
console.log(p.getAttribute("class"));



let d = document.querySelector("div");
console.log(d.style);

d.style.backgroundColor="green";
d.style.color="white";
d.style.fontSize="30px";
d.style.visibility="hidden "
d.innerText="hello";
// console.log(d.innerText);



//2)---- Insert Elements ----

//creating a button

let newbtn = document.createElement("button");
newbtn.innerText="click me!"
console.log(newbtn);

let div =document.querySelector("div");
div.prepend(newbtn)
div.append(newbtn);
div.before(newbtn);
div.after(newbtn);

let p =document.querySelector("p");
p.after(newbtn)

//creating a heading

let heading=document.createElement("h4");
heading.innerHTML="<i>this is new heading</i>";

document.querySelector("body").prepend(heading);

*/

//3)---- Delete Elements ----

let heading=document.createElement("h4");
heading.innerHTML="<i>this is new heading</i>";

document.querySelector("body").prepend(heading);


let para =document.querySelector("p");
para.remove();

// heading.remove();