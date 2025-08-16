//for Loop
// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// Dry Run
// for(let i = 5; i>=1; i--){
//     console.log(i);
// }

// for(let i = 10; i>=1; i=i-3){
//     console.log(i);
// }
// console.log(i);             //error(i is not defined)

// Print Odd Numbers
// for(let i =1; i<=15; i=i+2){
//     console.log(i);
// }

// console.log("Backwards: ");
// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

//Print even Numbers
// for(let i=2; i<=20; i=i+2){
//     console.log(i);
// }


// Infinite Loops (Your Browser Will get hang)
// for(let i=1; ; i++){
//     console.log(i);
// }

// Print multiplication Table
// Table of 5
// for(let i=1; i<=10; i++){
//     console.log("5 * "+ i + " = "+ 5*i)
// }

// Method 2:
// for(let i=5; i<=50; i=i+5){
//     console.log(i);
// }

// for(let i=51; i<=510; i=i+51){
//         console.log(i);
// }

// let n = prompt("write your number: ");
// n = parseInt(n);

// for(let i=n; i<=10*n; i=i+n){
//     console.log(i);
// }


// Nested for loop
// for (let i=1; i<=3; i++){
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

// for (let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }


//While loop
// let i =1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let i =5;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// let i = 0;
// while(i<=20){
//     console.log(i);
//     i++;
// }

// let i = 0;
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }

// let i = 1;
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }


// Favourite Movie
// const favMovie = "avatar";
// let guess = prompt("Guess Movie Name: ");;
// while((guess != favMovie) && (guess != "quit")){
//     guess = prompt("Wrong Guess Please Try Again")
// }

// if(guess==favMovie){
//     console.log("Congrats");
// } else{
//     console.log("You Quit...")
// }


// Break Keyword
// let i =1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("we used break at 3");


// const favMovie = "avatar";
// let guess = prompt("Guess Movie Name: ");;
// while(guess != favMovie){
//     if(guess == "quit"){
//         console.log("You Quit...");
//         break;
//     }
//     guess = prompt("Wrong Guess Please Try Again")
// }

// if(guess==favMovie){
//     console.log("Congrats");
// }


//Loops with Arrays
// let fruits=["mango", "apple", "banana", "litchi", "orange"];
// for(let i=0 ; i<fruits.length; i++){
//     console.log(i, fruits[i])
// }

// odd index
// let fruits=["mango", "apple", "banana", "litchi", "orange"];
// for(let i=1 ; i<fruits.length; i=i+2){
//     console.log(i, fruits[i])
// }

// Even index
// let fruits=["mango", "apple", "banana", "litchi", "orange"];
// for(let i=0 ; i<fruits.length; i=i+2){
//     console.log(i, fruits[i])
// }

// let fruits=["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");
// for(let i=0 ; i<fruits.length; i++){
//     console.log(i, fruits[i])
// }

// Reversed Array
// let fruits=["mango", "apple", "banana", "litchi", "orange"];
// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i])
// }

//Nested Loops with Nested Arrays
// let heroes = [["ironman", "spiderman", "thor"],["superman", "wonder women", "flash"]];
// for(let i=0; i<heroes.length; i++){
//     console.log(`List #${i}`);
//     for(let j=0; j< heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

// let heroes = [["ironman", "spiderman", "thor"],["superman", "wonder women", "flash"]];
// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j=0; j< heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// let student = [["aman", 95], ["shradha", 94.4], ["karan", 100]];
// for(let i=0; i<student.length; i++){
//     console.log(`INFO of #${i+1}`)
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }


// for-of Loops
// let fruits = ["mango", "apple", "banana", "orange", "litchi"];
// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }


// Nested for of Loops
// let heroes = [["superman", "batman", "wonder woman"], ["spiderman", "ironman", "thor"]];
// for(list of heroes){
//     for(hero of list){
//         console.log(hero); 
//     }
// }


// Assignment Qs
// Qsl. Write a JS program to delete all occurrences of element 'num' in a given array.
// Example : if arr=fl, 2, 3, 4, 5, 6, 2, num = 2
// Result should be arr= [1, 3, 4, 5, 6, 3]

// let arr=[1,2,3,4,5,6,2];
// console.log(arr);
// let num = 2;
// for(let i =1; i<arr.length; i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

// let num = 21564;
// let count = 0;
// let copy = num;
// while(copy>0){
//     copy = Math.floor(copy/10);
//     count++;
// }
// console.log(`Count is ${count}`);


// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

// let num = 32556;
// let sum = 0;
// let copy = num;
// let rem = 0;
// while(copy>0){
//     rem = copy%10;
//     copy = Math.floor(copy/10);
//     sum = sum + rem;
// }
// console.log(`Sum is ${sum}`);


// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7)  = lx2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = lx2x3x4x5 = 120
// 3! (factorial of 3) = lx2x3 = 6
// 0! Is always 1

// let num = 6;
// let fact =1;
// for(let i = 1; i<=num; i++){
//     fact = fact*i;
// }
// console.log(`Factorial of ${num} is ${fact}`);


// Qs5. Find the largest number in an array with only positive numbers.
// let arr = [10, 20, 50, 60, 5, 43, 122 ,5, 1];
// let max = 0;
// for(let i = 1; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(`Max Element is ${max}`);