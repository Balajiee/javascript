
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall

// Test-1
// let markBMI=78/1.69**2
// console.log(markBMI);
// let johnBMI=92/1.95**2
// console.log(johnBMI);

// let higherBMI=markBMI>johnBMI
// console.log(higherBMI);

//Test-2
// const markMass=95
// const markHeight=1.88
// const markBMI=markMass/(markHeight*markHeight)
// console.log(markBMI);

// const johnMass=85    
// const johnHeight=1.76
// const johnBMI=johnMass/(johnHeight*johnHeight)
// console.log(johnBMI);

// const higherBMI=markBMI>johnBMI
// console.log(higherBMI);


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 

// let markBMI=78/1.69**2
// console.log(markBMI);
// let johnBMI=92/1.95**2
// console.log(johnBMI);

// let higherBMI=markBMI>johnBMI
// console.log(higherBMI);

// if(higherBMI){
//     console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
// }
// else{
//     console.log(`John's BMI ${johnBMI} is higher than Mark's${markBMI}!`);
// }


// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// testcase-1
// const scoreDolphins=(96+108+89)/3        //dolphine won
// const scoreKoalas=(88+91+110)/3

//testcase-2
// const scoreDolphins=(97+112+101)/3          //match draw
// const scoreKoalas=(109+95+106)/3

//testcase-3
// const scoreDolphins=(97+112+101)/3
// const scoreKoalas=(109+95+123)/3                //kolas win

// console.log( scoreDolphins,scoreKoalas);
// if(scoreDolphins>scoreKoalas){
//     console.log("Dolphins Won");
// }
// else if(scoreKoalas>scoreDolphins){
//     console.log("kolas win");
// }
// else if(scoreDolphins===scoreKoalas){
//     console.log("match draw");
// }


// Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 
// test-1
// const bill=275          //330
//  test-2
// const bill=40           //48
//test-3
// const bill=430              //516

//  const tip=bill>=500 && bill<=300?bill*0.15:bill*0.20
//  const result=`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`
//  console.log(result);


// JavaScript Fundamentals – Part 2
// Coding Challenge #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores 

// arrow
// const calcAverage=(a,b,c)=>(a+b+c)/3
// console.log(calcAverage(44,23,71));

// expression
// const calcAverage=function(a,b,c){
// return (a+b+c)/3
// }

// declaration
// function calcAverage(a,b,c){
//     const calculation=(a+b+c)/3
// return calculation
// }
//testCase-1
// const scoreDolphin=calcAverage(44,23,71)
// console.log(scoreDolphin);
// const scorekoalas=calcAverage(65,54,49)
// console.log(scorekoalas);

//testCase-2
// const scoreDolphin=calcAverage(85,54,41)
// console.log(scoreDolphin);
// const scorekoalas=calcAverage(23,34,27)
// console.log(scorekoalas);

// function checkWinner(avgDolhins,avgKoalas){
//     if (avgDolhins>=2* avgKoalas){
//         console.log(`Dolphins Win ${avgDolhins} vs ${avgKoalas}`);
//     }
//     else if (avgKoalas >= 2*avgDolhins){
//         console.log(`koalas Win ${avgKoalas} vs ${avgDolhins}`);
//     }
//     else{
//         console.log("Draw");
//     }

// }
// checkWinner(scoreDolphin,scorekoalas )

// Coding Challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can 
// actually be the returned value of a function! So you can just call a function as array 
// values (so don't store the tip values in separate variables first, but right in the new 
// array) �

const calcTip=function(bill){
    const calculation=bill>=50 && bill<=300? bill*0.15:bill*0.20
    return calculation
}
const bill=[125,555,44]
const result=[calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])]
console.log(result);

const total=[bill[0]+result[0],bill[1]+result[1],bill[2]+result[2]]
console.log(total);