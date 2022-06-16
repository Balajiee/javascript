// forOf ==mostly use for array

// syntax
// for(anyname of names(variable name)){
//     console.log(anynames);
// }

// example-1

// const names=["balaji","baskar","shanthi","seenu"]

// for(looping of names){
// console.log("names"+" "+looping);
// }

// testing in forIn loop

// for(let name in names){
//     console.log(names);
// }
// result come with index value ===repeats all four names four times





//--------------------------------------------------------------------
// forIn=mostly use for objects

// for(anyname in names(variable name)){
//     console.log(anynames);
// }

const names={
    firstName:"balaji",
    lastName:"baskar",
    age:18,
    DOB:21-4-1993,
    place:"cuddalore"
}

for(looping in names){
    console.log(looping,names[looping]);
}