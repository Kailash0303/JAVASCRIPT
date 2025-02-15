//practise set 5

let compaines=["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" ,"Netflix"];
console.log(compaines);

//1)
let rem =compaines.shift();
console.log("removed company name :",rem);
console.log(compaines);

//2)
compaines.splice(1,1,"Ola");
console.log(compaines);

//3)
compaines.push("Amazon")
console.log(compaines);