// forLoop;
// runs very fast

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }

//forWhile

// let a = 1;
// while (a < 50) {
//   if (a < 20) {
//     console.log(a);
//   } else {
//     console.log("print Hello");
//   }
//   a++;
// }

// let a = 1;
// while (a < 50) {
//   if (a % 2 ===0) {
//     console.log("even", a);
//   } else {
//     console.log("odd", a);
//   }

//   a++;
// }

// let a = 1;
// while (a <=50) {
//   console.log(a);

//   a++;
// }

//using two whileLoop

// let a = 15;
// while (a < 100) {
//   console.log("answer", a);

//   a++;
// }

// 30-5-2022 topics
// Array
// example-1

// let arr=[1,2,3,4,5,6,7,8]
// let arr1=arr[5]
// console.log(arr1);

// example-2
// let names =["balaji","baskar","ravi"]
// let newName=names[2]
// console.log(newName);

// -push
// push will add the number from last 

// let names =["balaji","baskar","ravi"] 
// // let newNames=names.push("modh")
// let newNames=names.push("modh",'palani') 
// console.log(newNames);
// console.log(names);

// let arr=[1,2,3,4,5,6]
// let newNum=arr.push(9)
// let addnEw =arr.push(5,9)
// console.log(newNum);
// console.log(addnEw);
// console.log(arr);

// -unshift

// unshift will add the value from first
// let num=[1,2,3,4,5,6,7,8,9]
// let Newnum=num.unshift(10,15)
// console.log(Newnum);
// console.log(num);

// let names=['ravi','raja','ahmed']
// let newNames=names.unshift("balaji","baskar")
// console.log(names);

// -shift
// The shift() method removes the first item of an array.
// let num=[1,2,3,4,5,6,7,8,9]
// let Newnum=num.shift()
// console.log(Newnum);
// console.log(num);

// --pop
// The pop() method removes (pops) the last element of an array.

// let num=[1,2,3,4,5,6,7,8,9]
// let Newnum=num.pop()
// console.log(Newnum);
// console.log(num);

// let names=['ravi','raja','ahmed']
// let newNames=names.pop()
// console.log(names);

//reverse

// let num=[1,2,3,4,5,6,7,8,9]
// let Newnum=num.reverse()
// console.log(Newnum);
// console.log(num);


// -slice
//it wont affect original array
// method returns selected elements in an array, as a new array.
// The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.
// The splice() method changes the original array and slice() method doesn’t change the original array.
// slice()
// slice(start)
// slice(start, end)

// let num=[5,6,8,3,2,1,8,3]
// // let newNum=num.slice(0,3)
// let newNum=num.slice(1,3)           //6 8
// let newNume=num.slice(0,4)          //5 6 8 3
// let newNumer=num.slice(1,3)         //6 8 
// let newNumers=num.slice(2,5)        // 8 3 2
// let newNumerss=num.slice(0,2)         // 5, 6
// let newNumersss=num.slice(4,6)          //2 1
// console.log(newNum);
// console.log(newNume);
// console.log(newNumer);
// console.log(newNumers);
// console.log(newNumerss);
// console.log(newNumersss);

// var a=['j','u','r','g','e','n'];

// array.slice(startIndex, endIndex)
// a.slice(2,3);
// => ["r"]

// -splice
//-splice will cut from the array
// let num=[5,6,8,3,2,1,8,3]
// let newNume=num.splice(3)
// console.log(newNume);
// console.log(num);   // 5,6,8
// let newArray=num.splice(2,4) // 8 3 2 1
// let newArray=num.splice(4,3) // 2 1 8 
// let newArray=num.splice(2,2) //8 3 
// console.log(newArray);

// array.splice(startIndex, deleteCount)
// a.splice(2,3);
// => ["r","g","e"]























// -map
  

  

// -filter

// -reduce

// -indexof

// stringTypes


