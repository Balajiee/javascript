// strict operator(===)
// let age=18
// if(age===18){
//     console.log("you are a adult");
// }
// else{
//     console.log("you are not adult");
// }
// returns true only both values are same

//loose operator(==)
// let age="18"
// if(age===18){
//     console.log("you are a adult");
// }
// if (age==18) {
//     console.log("adult");       //executes this part
// }
// else{
//     console.log("you are not adult");
// } 

// let fav=prompt("what is your fav number")
// console.log(fav);
// console.log(typeof(fav));       // its string
//loose operator

// if(fav==5){
//     console.log("5 is amazing number");     //works this block because of loose operator
// }else{
//     console.log("better luck next time");
// }

// strict operator

// if(fav===5){
//     console.log("5 is amazing number");     
// }else{
//     console.log("better luck next time");// works this block because of strict operator
// }

// changing the string to number

let fav=Number(prompt("what is your fav number"))
console.log(fav);
console.log(typeof(fav));

// using else if
// can able include my else if 

if(fav===15){
    console.log("15 is cool number");
}else if(fav===7){
    console.log("7 is a amazing number");
}else if (fav===1){
    console.log("1 is hot");
}
else{
    console.log("15 and 7 isnt selected");
}
 if(fav !==15)console.log("why not 15");