// &&(AND)
// true when all are true

// ||(OR)
//true when one is true

// !(not)
// inverts true or false

//logical operator

// example-1
// const hasDriverLicense=true
// const hasGoodVision=true

// console.log(hasDriverLicense &&hasGoodVision); //true    //both the condition are true then result would be true
// console.log(hasDriverLicense ||hasGoodVision);//true     //anyone condition true then result would be true
// console.log(!hasDriverLicense); //false                 //showing value opposite 

// example-2
const hasDriverLicense=true
const hasGoodVision=true

console.log(hasDriverLicense &&hasGoodVision);  //false
console.log(hasDriverLicense ||hasGoodVision);  //true
console.log(!hasDriverLicense); //false

const shouldDrive= hasDriverLicense&&hasGoodVision
if(shouldDrive){
    console.log("can drive");
}
else{
    console.log("need to wait");
}

// result=need to work

const shouldDrives= hasDriverLicense||hasGoodVision
if(shouldDrives){
    console.log("can drive");
}else{
    console.log("need to wait");
}

//result=can drive


// const isTried=true
const isTried=false
console.log(hasDriverLicense||hasGoodVision||isTried);      // true (true false true)
console.log(hasDriverLicense&&hasGoodVision&&isTried);      // false (true false true)
console.log(hasDriverLicense&&hasGoodVision||isTried);      // true (true true false)
console.log(hasDriverLicense||hasGoodVision&&isTried);      // true (true true false)

if(shouldDrive&&!isTried){
    console.log("do better");
}
else{console.log("dont do");}

//true true !false(true)