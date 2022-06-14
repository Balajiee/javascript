// ternery operator is an expression it produced the value
//can use this in template string 
const age =18
const drink="i like to drink wine"
const dontDrink="i like to drink water"

const result=age>=18?drink:dontDrink
console.log(result);

const drinks=age>=18?'wine':'water'
console.log(drinks);

//doing same in ifelse

let cool;
if(age>=18){
    cool='wine'
}else{
    cool="water"
}

//same result

console.log(`i like to drink water ${age>=18?'wine':'water'}`);  //WORKS PERFECTLY