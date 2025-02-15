class ToytaCar{


    //constructors
    constructor(brand , pmilg){
        console.log("creating new object");        
        this.brandname = brand;
        this.milg = pmilg
    }



    start(){
        console.log(" starting ..... ");
    }
    stop(){
        console.log(" stoping ..... ");
    }

    // setbrandName(brand){
    //     this.brand=brand;
    // }

};



let fortuner = new ToytaCar("fortuner5.0" , 10); // brandname = fortuner5.0
console.log(fortuner);

let lexus = new ToytaCar("lexus" , 20); // undefined no brand name passed
console.log(lexus);



// let fortuner = new ToytaCar();
// let lexus = new ToytaCar();

/*
lexus.setbrandName("lexus1.0")
fortuner.setbrandName("for1");
*/