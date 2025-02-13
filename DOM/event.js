let btn1=document.querySelector("#btn1");

/*
btn1.onclick = () =>{
    console.log("clicked mouse");
    let a=25;
    a++;
    console.log(a);
}
*/

/*
btn1.onclick = (evt) =>{  // first is overriden
    // console.log(evt);
    // console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);
}
*/

/*
let div=document.querySelector("div");

div.onmouseover = () =>{
    console.log("ur inside div");
}
*/

//event handler
btn1.addEventListener("click" , ()=>{
    console.log("btn1 was clicked by handler 1");
});

btn1.addEventListener("click" , ()=>{
    console.log("btn1 was clicked by handler 2");
});

const h3 =()=>{
    console.log("btn1 was clicked by handler 3");
};

btn1.addEventListener("click" , h3 );

btn1.addEventListener("click" , ()=>{
    console.log("btn1 was clicked by handler 4");
});

// removeEventListener

btn1.removeEventListener("click" , h3)
