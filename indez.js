let a= 5;
let b= 9;
let ans= a+b;
console.log(ans);
console.log(typeof ans);

const car = ["BMW","Mercedes", "nexa"];
car.push("TATA")
console.log(car);
console.log(car[2]);

var x = 10;
if(x > 18){
    console.log("allowed to drive")
}else{
    console.log("Not allowed to drive legally")
}
 var count= 10;
 for(var i= 1; i<=count; i++){
    console.log(i)
 }
   
var age = Number(prompt("Please enter your age"));
if(x>18){
    console.log("You get a 20% discount");
}else if(x<18 && age<65){
    console.log("Normal price ticket applies");
}else{
    console.log("You get a 30% senior discount");
}

var prompt = require("prompt-sync")();

var age = Number(prompt("Please enter your age: "));

if (age < 18) {
    console.log("You get a 20% discount");
} else if (age >= 65) {
    console.log("You get a 30% senior discount");
} else {
    console.log("Normal price ticket applies");
}