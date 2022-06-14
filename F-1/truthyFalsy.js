//5 falsy values
// 0,"",undefined,null,NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("balaji"));
// console.log(Boolean(""));
// console.log(Boolean({}));

// let money=0
// if(money){
//     console.log("spend the money");
// }else{
//     console.log("dont spend");
// }
//else block execute // falsy value
let money=1
if(money){
    console.log("spend the money");
}else{
    console.log("dont spend");
}
//if block executes // truthy value

// let height;  //undefined
let height=1    //defined
if(height){
    console.log("height is defined");
}
else{
    console.log("height isnt defined");
}

//becoz undefined also a falsy