// direct way of creating object 
const student ={
    fullname : "Kailash",
    marks : 94.4,

    printMarks : function (){
        console.log("marks =",this.marks );
    },
}

const employee = {
    caltax() {
        console.log("tax rate is 10%");
    },
  
};

const karanArjun = {
    salary : 50000,
/*
    caltax(){
        console.log("tax rate is 20%");
        
    }*/
};

karanArjun.__proto__ = employee;















/*

const employee = {
    //can define function in this --> method 1
    caltax1() {
        console.log("tax rate is 10%");
    },
    //can define function in this --> method 2
    caltax2 : function (){
        console.log("tax is 90%");
        
    },
};

karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;



const karanArjun2 = {
    salary : 50000,
};

const karanArjun3 = {
    salary : 50000,
};

const karanArjun4 = {
    salary : 50000,
};
*/