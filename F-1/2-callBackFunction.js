
const mixer=function(cutting){
    return cutting*4
}

const fruits=function(apple,orange){

    const appleJuice=mixer(apple)
    const orangeJuice=mixer(orange)

const juice=`i want juice ${appleJuice} and juice ${orangeJuice}`
return juice
}
const result=fruits(10,15)
console.log(result);

//callBack function
