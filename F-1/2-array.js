const names=['balaji','baskar','raju','shanthi','seenu','preethi','viji']

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

//in loop

// for(i=0;i< names.length; i++){
//     const arr=names[i]
//     console.log(arr);

// }

console.log(names.length-1);

//can bale to change the value in array
names[2]="ravi"
console.log(names);

//can perform expression also i array
const balaji="balajiBaskar"
const newName=['balaji','baskar',2022-1993,balaji]
console.log(newName);           //(4)  ['balaji', 'baskar', 29, 'balajiBaskar']

//can able to put other arrays in array

const check=["balaji",'shanthi',2022-1993,balaji,names]
console.log(check);

function calAge1(birthYear){
        return 2022-birthYear
}

const years=[1993,1994,1995,1996,1999,2000]
const age1=calAge1(years[0])
const age2=calAge1(years[1])
const age3=calAge1(years[2])
const age4=calAge1(years[3])
const age5=calAge1(years[4])
const age6=calAge1(years[years.length-1])
console.log(age1,age2,age3,age4,age5,age6);

//can able to store in array as well
const calages=[calAge1(years[0]),calAge1(years[1]),calAge1(years[2]),calAge1(years[3]),calAge1(years[4]),calAge1(years[years.length-1])]
console.log(calages);   
//[29, 28, 27, 26, 23, 22]