const friends=['balaji','shanthi','baskar','preethi','seenu','sammantham']
// adding

//push-it will add from last(index last value)
friends.push("aleena")
console.log(friends);
//7) ['balaji', 'shanthi', 'baskar', 'preethi', 'seenu', 'sammantham', 'aleena']

//unshift-it will add from first(index first value)
friends.unshift("pushparaj")
console.log(friends);
//(8) ['pushparaj', 'balaji', 'shanthi', 'baskar', 'preethi', 'seenu', 'sammantham', 'aleena']

//deleting

//pop-it will delete the last value in array
friends.pop()
console.log(friends);
//(7) ['pushparaj', 'balaji', 'shanthi', 'baskar', 'preethi', 'seenu', 'sammantham']

//shift-it will delete the first value in the array
friends.shift()
console.log(friends);
//6) ['balaji', 'shanthi', 'baskar', 'preethi', 'seenu', 'sammantham']

//indexof


console.log(friends.indexOf("seenu"));  //4
const result=friends.includes("preethi")
console.log(result);        //true

friends.push(23)
console.log(friends);
console.log(friends.includes("sammantham"));
console.log(friends.includes("sammantha"));
console.log(friends.includes(23));

if(friends.includes("preethi")){
    console.log("yes! she is in team");
}
else{  console.log("she is not in the team");}
  


