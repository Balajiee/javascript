let firstName="balaji"
let lastName="baskar"
let age=18

let details= "my name is"  + firstName + "and last name is"+lastName+ 'and my age is'+age+"!"
console.log(details);

//template string
let newDetails=`my name is ${firstName} and last name is ${lastName} and my age is ${age}`
console.log(newDetails);
// can use multiple lines 
let lines=`i am ${firstName}
            lastName ${lastName}`
            console.log(lines);