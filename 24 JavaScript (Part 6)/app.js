// What are Functions?

// function hello(){
//     console.log("hello");
// }
// hello();

// function printName(){
//     console.log("Shubham");
//     console.log("Pattewar");
// }
// printName();

// function print1to5() {
//     for(let i = 1; i <= 5; i++){
//         console.log(i); 
//     }
// }
// print1to5();

// function isAdult(){
//     let age = 17;
//     if(age >= 18){
//         console.log("Adult");
//     } else {
//         console.log("Not Adult");
//     }
// }
// isAdult();


// Practice Qs1
// function printPoem(){
//     console.log("Twinkle Twinkle, little Star");
//     console.log("How I wonder What youa are??");
// }
// printPoem();


// Prqctice Qs2
// function roll(){
//     die = Math.floor(Math.random()*6) + 1;
//     console.log(die);
// }
// roll();
// roll();


// Functions with Arguments
// function printName(name){
//     console.log(name);
// }
// printName();        //undefined
// printName("Shubham");
// printName("Rajat");

// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("Shubham", 21);
// printInfo("Rajat", 18);
// printInfo("Shubham");       //you will not get error
// printInfo();

// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,2);
// sum(4,5);
// sum(980,44);


// Practice Qs3
// function average(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// average(2,4,6);
// console.log(average());         //NaN
// console.log(average);         //prints fxn definition(there is no parenthesis)

// Practice Qs4
// function table(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// table(32);
// table(77);


// return keyword
// let arr = [1,2,3,4];
// console.log(arr);
// console.log(arr.slice(2,4));
// console.log(arr);
// let part = arr.slice(2,4);      //slice fxn return the array here
// console.log(part);

// function sum(a,b){
//     return a+b;
// }
// let s = sum(6,7);
// console.log(s);
// console.log(sum(5,7));

// a = sum(sum(3,4),7);            //calculate sum of 3 numbers
// console.log(a);

// b = sum(sum(3,4),sum(5,8));            //calculate sum of 4 numbers
// console.log(b);

// function print(){
//     console.log("Hi");
//     console.log("Hi");
//     return 0;
//     console.log("Hi");
//     console.log("Hi");
// }
// print();        // it will print twice only
// console.log(print());

// function isAdult(age){
//     if(age>=18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
//     console.log("bye bye");         //it will not execute
// }
// console.log(isAdult(30));
// console.log(isAdult(11));


// Practice Qs 5
// Create a Function that returns the sum of numbers from 1 to n.
// function getSum(n){
//     let sum = 0;
//     for(let i = 1; i<=n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(getSum(10));
// console.log(getSum(100));


// Practice Qs 6
// Create a Function that returns the concatenation of all strings in an array.
// let str = ["hi", "hello", "bye", "!"];
// function concat(str){
//     let result = "";
//     for(let i = 0; i < str.length; i++){
//         result = result + str[i];
//     }
//     return result;
// }
// console.log(concat(str));


// What is a Scope?
// Function Scope

// function calSum(a, b){
//     let sum = a+b;
// }
// calSum(1,2);
// console.log(sum);       //error(Uncaught ReferenceError: sum is not defined)

// let sum = 45;               // Global Scope
// function calSum(a, b){
//     let sum = a+b;          // Function Scope
// }
// calSum(1,2);
// console.log(sum);           // o/p: 45

// let sum = 45;               // Global Scope
// function calSum(a, b){
//     let sum = a+b;          // Function Scope
//     console.log(sum);       //o/p: 3
// }
// calSum(1,2);

// let sum = 45;
// function calSum(a, b){
//     console.log(sum);           //o/p: 45(Here, you can use global scope variable)
// }
// calSum(1,2);


// Block Scope
// {
//     let a = 25;
// }
// console.log(a);         //error(a is not defined)

// {
//     const a = 20;
// }
// console.log(a);           //error

// {
//     var a = 30;
// }
// console.log(a);             //no error

// for(let i =1; i <=5; i++){
//     console.log(i);
// }
// console.log(i);             //error

// let age = 25;
// if(age>=18){
//     let string = "adult";
// }
// console.log(string);           //error


// Lexical Scope
// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);             //this is possible
//         console.log(y);             
//     }
//     innerFunc();                    //this is also possible
// }
// outerFunc();

// function outerFunc(){
//     function innerFunc(){
//         console.log(x);
//         console.log(y);             
//     }
//     let x = 5;
//     let y = 6;  
//     innerFunc();                        //it will work due to hoisting
// }
// outerFunc();

// function outerFunc(){
//     function innerFunc(){
//         console.log(x);
//         console.log(y);             
//     }
//     innerFunc();                        // it will not work
//     let x = 5;
//     let y = 6;  
// }
// outerFunc();

//OPPOSITE IS NOT TRUE IN LEXICAL SCOPE
// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         let a = 10;
//         console.log(x);
//         console.log(y);             
//     }
//     console.log(a);                     //this is not possible(a is not defined)
//     innerFunc();
// }
// outerFunc();

// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){           //function scope
//         let a = 10;
//         console.log(x);
//         console.log(y);             
//     }
//     console.log(a);                     //this is not possible(a is not defined)
//     innerFunc();
// }
// innerFunc();                //calling innerFunc is not possible(innerFunc is not defined)


// Practice Qs 7
let greet  = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);

    function innerGreet() {
        console.log(greet);
    }

    innerGreet();
}
console.log(greet);
changeGreet( );


// Functions Expressions
// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(2,6));

// let hello = function(){
//     console.log("hello");
// }
// hello();                //function is called with the name of the variable with parenthesis

// hello = function(){
//     console.log("Namaste");
// }
// hello();                //here you have changed the function defination(Or updated the fxn)


// Higher Order Function
// function multipleGreet(func, count){
//     for(let i = 1; i <= count; i++){
//         func();
//     }
// }

// let greet = function() {
//     console.log("hello");
// }

// multipleGreet(greet, 5);            //dont use greet as: greet() (It means you have executed greet)

// multipleGreet(function(){console.log("Namaste");}, 10);


// Higher Order Function(Returns)
// function oddEvenFactory(request){
//     if(request == "odd"){
//         return odd = function(n){
//             console.log(!(n%2 == 0));
//         }
//     }else if(request == "even"){
//         return even = function(n){
//             console.log(n%2 == 0);
//         }
//     }else{
//         console.log("Wrong Request");
//     }
// }
// let request = "odd";        //or even

// let func = oddEvenFactory(request);
// func(3);
// func(10);


// Methods
// const calculator = {
//     num: 55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// };

// console.log(calculator);
// console.log(calculator.num);
// console.log(calculator.add);
// console.log(calculator.add(2,6));
// console.log(calculator.sub(3,6));
// console.log(calculator.mul(3,2));

// // Simiarly
// console.log(Math.PI);
// console.log(Math.random);
// console.log(Math.random());

// //type of array
// let arr = [1,2,3];
// console.log(typeof(arr));
// arr.push(4);
// console.log(arr);

//Methods Shorthand
// const calculator = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     }
// }
// console.log(calculator.add(3,5));
// console.log(calculator.sub(3,5));


// Assignment Qs
// Qsl . Write a JavaScript function that returns array elements larger than a number.

//Method 1(My Method)
// let arr = [4,6,2,1,5,9,8];
// function larger(n){
//     let large = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>n){
//             large.push(arr[i])
//         }
//     }
//     return large;
// }
// console.log(larger(5));

// Method 2
// let arr = [8,9,10,1,2,3,4,5,6,7];
// let num = 5;

// function getElements(arr, num){
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i]> num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr,num);


// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = "abcdabcdefgggh"
// ans = "abcdefgh"

// let str = "abcdabcdefgggh";
// function getUnique(str){
//     let ans = "";
//     for(let i = 0; i < str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             ans = ans + currChar;
//         }
//     }
//     return ans;
// }

// console.log(getUnique(str));

