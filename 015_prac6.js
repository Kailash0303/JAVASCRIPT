//practise set 6

function vowelsfun(str){
    
    let v=0;
    let str2 = str.toLowerCase();
    console.log(str2);
    
    for(let i =0 ; i<str.length ; i++){
    //    console.log(str[i]);
       
        if(str[i] == "a"|| str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" ){
            v++;
        }
    }
    // console.log(v);
    
    return v;
}
console.log(vowelsfun("kailash"));

   

