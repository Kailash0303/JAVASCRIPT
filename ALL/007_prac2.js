// practise set 2 
/*
//p1
for(let i=1 ; i<=100 ; i++)
{
    if(i%2==0){
    console.log("num is :",i)
}
}
*/
//p2

let guesName=25;
let userName=prompt("Guess the num : ");

while(userName!=guesName)
{
    userName=prompt("wrong num ,Guess the num again : ");
}

console.log("congrulations !!!");
