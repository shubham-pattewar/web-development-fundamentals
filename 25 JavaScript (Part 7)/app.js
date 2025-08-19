//"this" keyword

// const student = {
//     name: "Shubham",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,

//     getAvg(){
//         console.log(this);      //it prints object of function
//         // let avg = (eng+math+phy)/3;  (it will show error "eng is not defined")
//         // method cannot access the members directly
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
// student.getAvg();


// function getAvg(){
//     console.log(this);          //it prints window object (highest level object)
// }
// console.log(getAvg());

// window.alert("hello");          //by using window also you can show alert(window will be considered as object)



// Try and Catch
// console.log("hello")
// console.log("hello")
// // console.log(a);         //error: a is not defined
// console.log("hello")      //after you get the error you will not be able to print this hello
// console.log("hello")

//to solve this we have try and catch

// console.log("hello");
// console.log("hello");

// try{
//     console.log(a);
// } catch(e){
//     console.log("Caught an Error");
//     console.log(e)
// }

// console.log("hello2");
// console.log("hello2");



// Arrow Functions
// const sum = (a,b) => {
//     console.log(a+b);
// };
// sum(2,3);

// const cube = (n) => {
//     return n*n*n;
// }
// console.log(cube(2));
// console.log(cube(5));

// const pow = (a,b) => {
//     return a**b;
// }
// console.log(pow(2,4));

// for single arguments parentheses are not compulsory
// const cube = n => {
//     return n*n*n;
// }
// console.log(cube(4));


// const hello = () => {
//     console.log("hello world");
// }

// //error
// const hello2 =  => {
//     console.log("hello world2");
// }



//Implicit Ruturn in Arrow Functions
// const mul = (a,b) => (a*b);
// console.log(mul(2,3));

// const sum = (a,b) => a+b;       //no need of brackets even
// console.log(sum(2,3));

// const cube = (n) => n*n*n;
// console.log(cube(4));

// const cube2 = n => n*n*n;
// console.log(cube(8));



//Set Timeout
// console.log("Hi there!");

// setTimeout( () => {
//     console.log("Apna College")
// }, 3000);

// console.log("Welcome to ");



//Set Interval
// setInterval( () => {
//     console.log("Apna College")
// }, 2000);


// let id = setInterval( () => {
//     console.log("Apna College")
// }, 2000);
// console.log(id)

// clearInterval(id)



//this with arrow Functions
// const student = {
//     name: "shub",
//     marks: 95,
//     prop: this,  //global scope

//     getName: function(){        //Normal Function
//         return this.name;
//     },

//     getMarks: () => {
//         console.log(this);      //Parent Scope
//         return this.marks;
//     },

//     getInfo1: function() {
//         setTimeout(() => {
//             console.log(this)     //student
//         }, 2000)
//     },

//     getInfo2: function() {
//         setTimeout(function () {
//             console.log(this)       //window
//         }, 2000)
//     },
// };
// console.log(student)
// console.log(student.getName())
// console.log(student.getMarks())



//Practice Qs
// Write an arrow function that returns the square of a number 'n'.
// const square = (n) => (n*n);
// console.log(square(4));

// Write a function that prints "Hello World" 5 times at intervals of 2s each.
// let id = setInterval(() => {
//     console.log("Hello World")
// }, 2000)

// setTimeout(() => {
//     clearInterval(id);
// }, 10000)