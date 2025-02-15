// <-- part 4 --> 
//try - catch

let a = 5;
let b = 10;

console.log("a + b " ,a+b);
console.log("a + b " ,a+b);

try{
    console.log("a + b " ,a+c);
}catch(err){
    console.log(err);
    
}

console.log("a + b " ,a+b);
console.log("a + b " ,a+b);
console.log("a + b " ,a+b);



/*
// <-- part 3 -->

class Person{
    
    constructor (name) {
        this.name =name;    
        this.speices = "homo sapiens";
    }

    eat(){
        console.log("eating ..");
    }
}   


class Engineer extends Person{

    constructor(name , branch){                            
        super(name);         //--> invoking parent class constructor
        this.branch = branch;
                                                
        
    }

    work(){
        super.eat();
        console.log("solving problems");
    }
}

let engObj = new Engineer("kailash" , "IT");



// console.log("enter parent");
// console.log("enter child");
// console.log("exit child");

*/

/*
<-- part 2-->

class Person{

    constructor () {
        this.   speices = "homo sapiens";
    }

    eat(){
        console.log("eating ..");
    }

    sleep(){
        console.log("sleeping ..");   
    }

    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("solving problems");
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patient");
    }
}

let Kailash = new Engineer();
let Hitesh = new Doctor();

*/

/*
<-- part 1 -->

class Parent{
    hello() {
        console.log("hello");
    }
}

class Child extends Parent{

}

let obj = new Child();

*/