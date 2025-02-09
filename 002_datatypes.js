// PRIMITIVE DATA TYPES
let a=100;
let fnm="kailash";
let isFollow=true;
let b=undefined;
let c=null;
let x=BigInt(false)
let y=Symbol("hello")
let z=Symbol(true)

const student={
     fname:"Raj kumar",
     age:20,
     cgpa:9.23,
    isPass:true,
};

student.age+=10;

console.log(student.age);
console.log(student["fname"])

//p1

const product={
    pname:"ball pen",
    rating:4,
    offer:5,
    price:270,
};

console.log(product);

//p2
const profile={
    prname:"Aman gupta",
    doFollow:true,
    posts:195,
    follwers:"569k",
    following:4,
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusantium."
    
};

console.log(profile);
console.log(typeof profile.posts);



