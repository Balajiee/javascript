// Example-1

// let hungry=true;
// let eat;
// if(hungry){
//     eat="yes"
//     console.log(eat);
// }else{
//     eat="No"
//     console.log(eat);
// }

//same method in ternery operator

//   const result= hungry===false?'yes':'no'
//   console.log(result);

//   example-2



// method-1
// const arr1=['balaji','baskar','balaji','shanthi','seenu','ramu','baskar',]
// const result1=Array.from(new Set(arr1))
// console.log(result1);           //(5) ['balaji', 'baskar', 'shanthi', 'seenu', 'ramu']

//method-2
// const arr2=['balaji','baskar','balaji','shanthi','seenu','ramu','baskar',]
// const filter=arr2.filter((item,index)=>{
// return arr2.indexOf(item)===index
// })
// console.log(filter);            //(5) ['balaji', 'baskar', 'shanthi', 'seenu', 'ramu']

//method-3
// const arr3=['balaji','baskar','balaji','shanthi','seenu','ramu','baskar',]
// const result2=[...new Set(arr3)]
// console.log(result2);       //(5) ['balaji', 'baskar', 'shanthi', 'seenu', 'ramu']

//method-4
// const arr4=['balaji','baskar','balaji','shanthi','seenu','ramu','baskar',]
// const output=Array.from(new Set(arr4))
// console.log(output);                //(5) ['balaji', 'baskar', 'shanthi', 'seenu', 'ramu']

// method-5
// displaying only duplicate values
// const array=[1,2,3,4,5,6,7,8,9,9,1,2]
// const findDuplicate=array=>array.filter((item,index)=>array.indexOf(item)!==index )
// const result=findDuplicate(array)
// console.log(result);
