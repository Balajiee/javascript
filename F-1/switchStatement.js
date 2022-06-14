// const day='tuesday'
// switch(day){
//         case "monday":                      //strict opeartor day=='tuesday'
//         console.log("fresh day");
//         break;
//         case "tuesday":
//         console.log("new day");
//         console.log("Funday");
//         break
//         case "wenesday":
//         case "thursday":
//         console.log("cricket day");
//         break
//         case "friday":
//         console.log("jogging");
//         break
//         case "saturday":
//         console.log("talking");
//         break
//         case "sunday":
//         console.log("girlFriend day");
//         break
//         default:                            //else
//         console.log('not matching');
// }
// same in ifelse statement

const day='friday'
if(day==="monday"){
    console.log("fresh day");
}
else if(day==="tuesday"){
        console.log("new day");
        console.log("Funday");
}
else if(day==="wenesday"||day==="thursday"){
    console.log("cricket day");
    console.log("swimming ");
}
else if(day==="friday"){
    console.log("jogging");
}
else if(day==="saturday"){
    console.log("talking");
}
else if(day==="sunday"){
    console.log("girlFriend day");
}
else{
    console.log("not matching");
}