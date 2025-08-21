//Array Methods

// let arr = [1,2,3,4,5]
// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);


// let arr = [1,2,3,4,5]
// arr.forEach(function(el) {
//     console.log(el);
// });

// let arr = [1,2,3,4,5]
// arr.forEach((el) => {
//     console.log(el);
// });


// let arr = [{
//     name:"shub",
//     marks: 98,
// }, 
// {
//     name: "anuj",
//     marks: 90.4,
// }, 
// {
//     name: "aman",
//     marks: 93.6,
// }]

// arr.forEach((student) => {
//     console.log(student);
//     console.log(student.marks);
// })



//map function
// let num = [1, 2, 3, 4]
// let double = num.map((el) => {
//     return el*2;
// });
// console.log(double)


// let num = [1, 2, 3, 4]
// let double = num.map((el) => { });
// console.log(double)     //O/P: (4) [undefined, undefined, undefined, undefined]


// let students = [{
//     name:"shub",
//     marks: 98,
// }, 
// {
//     name: "anuj",
//     marks: 90.4,
// }, 
// {
//     name: "aman",
//     marks: 93.6,
// }]

// let gpa = students.map((el) => {
//     return el.marks / 10;
// });
// console.log(gpa)        //o/p: (3) [9.8, 9.040000000000001, 9.36] => this is due to floating point precision


//filter function
// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
// let ans = nums.filter((el) => {
//     return el % 2 == 0;     //even -> true, odd -> false
// });
// console.log(ans)


// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
// let ans = nums.filter((el) => {
//     return el < 5;     //even -> true, odd -> false
// });
// console.log(ans)



// Every Method
// console.log([2,4,6].every((el) => (el % 2 == 0)));
// console.log([1,2,3,4].every((el) => (el % 2 == 0)));
// console.log([1,3,5,7].every((el) => (el % 2 != 0)));

//Some method
// console.log([2,4,6].some((el) => (el % 2 == 0)));
// console.log([1,2,3,4].some((el) => (el % 2 == 0)));
// console.log([1,5,5,7].some((el) => (el % 2 == 0)));



//Reduce Method
// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res, el) => res + el);
// console.log(finalVal);


// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el;
// });
// console.log(finalVal);



//Maximum in array
// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];
// let max = -1;
// for (let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];
// let max = arr.reduce((max, el)=> {
//     if(max < el){
//         return el;
//     } else {
//         return max;
//     }
// });
// console.log(max);



// Practice Questions
// Check if all numbers in our array are multiples of 10 or not.
// let nums = [10,20,30,40,50];
// let ans = nums.every((el) => el % 10 == 0);
// console.log(ans);

// Create a function to find the min number in an array.
// let nums = [10, 20, 30, 40, 50, 5]
// function getMin (nums){
//     let min = nums.reduce((min, el) => {
//         if(min < el){
//             return min;
//         } else {
//             return el;
//         }
//     });

//     return min;
// }

// console.log(getMin(nums));
// console.log(getMin([1, 4, 56, 75, -45, -66]));



// Default Parameters
// function sum(a, b=2){
//     return a+b;
// }
// console.log(sum(2,5));      //7
// console.log(sum(2));        //4
// console.log(sum());         //NaN


// function sum(a=2,b){
//     return a+b;
// }
// console.log(sum(2,5));       //7
// console.log(sum(2));         //NaN



// Spread
// console.log(Math.min(1,2,3,4,5,6,7,8,9,20));
// let arr = [1,2,3,1,4,0,7,4,6,7];
// console.log(Math.min(arr[0], arr[1], arr[2], arr[3]));        //time consuming


// let arr = [1,2,3,1,4,0,7,4,6,7];
// console.log(Math.min(...arr));
// arr.push(-50);
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));


// let arr = [1,2,3,1,4,0,7,4,6,7];
// console.log(...arr)
// console.log(..."apnacollege")



// Spread (Array Literals)
// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);
// newArr.push(6);
// console.log(arr);
// console.log(newArr);


// let chars = [..."hello"];
// console.log(chars);


// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// let nums = [...odd,...even];
// console.log(nums);



// Spread (Array Literals)
// const data={
//     email: "ironman@gmail.com",
//     password: "abcd",
// };

// const dataCopy = {...data, id: 123, country: 'India'};
// console.log(dataCopy);


// let arr = [1,2,3,4,5];
// let obj1 = {...arr};        //obj -> key:val pair (here key will be index)
// console.log(obj1)  
// let obj2 = {..."hello"}
// console.log(obj2)



// Rest 
// function sum(...args){      //arguments
//     for(let i = 0; i < args.length; i++){
//         console.log("You gave us: ", args[i]);
//     } 
// }
// sum(6)
// sum(1,2,3,4)


// function min(a,b,c,d){
//     console.log(arguments);
// }
// min(4,5,6,7)

// function max(){         // Also Valid
//     console.log(arguments);
// }
// max(4,5,6,7)


// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
//     // arguments.push(1)       // these methods will work on array, it is not a function(it is a collection)
// }
// min(1,2,3)


// function sum(){
//     return arguments.reduce((sum, el) => sum + el);        //error: arguments.reduce is not a function
// }
// sum(1,2,3,4)


// function sum(...args){              //it converts into array
//     return args.reduce((sum, el) => sum + el);        // And here the array methods works
// }
// console.log(sum(1, 2, 3, 4));
// console.log(sum(10, 25, 4));


// function min(...args){
//     return args.reduce((min, el) => {
//         if(min > el){
//             return el;
//         } else {
//             return min;
//         }
//     })
// }
// console.log(min(1,2,3,4));
// console.log(min(10,20,3,14));


// function min(msg, ...args){         //message shoul be written at first only
//     console.log(msg);
//     return args.reduce((min, el) => {
//         if(min > el){
//             return el;
//         } else {
//             return min;
//         }
//     })
// }
// console.log(min("hello",1,2,3,4));
// console.log(min("MIN:", 10,20,3,14));



// Destructuring
// let names = ["shub", "tony", "bruce"]
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];


// let names = ["shub", "tony", "bruce", "abc", "xyz"]        //Shorter version
// let [winner, runnerup, secondRunnerup] = names;
// console.log(winner,runnerup, secondRunnerup)


// let names = ["shub", "tony", "bruce", "abc", "xyz"]        //Shorter version
// let [winner, runnerup, ...others] = names;
// console.log(winner,runnerup)
// console.log(...others)



// Destructuring (Objects)
// const student = {
//     name: "Shubham",
//     age: 14,
//     class: 9,
//     subjects: ["hindi", "english", "maths", "science"],
//     username: "shub@123",
//     password: "abcd"
// };

// let {username, password} = student;
// console.log(username)
// console.log(password)


// const student = {
//     name: "Shubham",
//     age: 14,
//     class: 9,
//     subjects: ["hindi", "english", "maths", "science"],
//     username: "shub@123",
//     password: "abcd",
// };

// let {username: user, password: secret, city = "Mumbai"} = student;
// // console.log(username)       //error
// // console.log(password)       //error

// console.log(user)
// console.log(secret)
// console.log(city)


// const student = {
//     name: "Shubham",
//     age: 14,
//     class: 9,
//     subjects: ["hindi", "english", "maths", "science"],
//     username: "shub@123",
//     password: "abcd",
//     city: "Pune"            //most prefered
// };

// let {username: user, password: secret, city = "Mumbai"} = student;
// // console.log(username)       //error
// // console.log(password)       //error

// console.log(user)
// console.log(secret)
// console.log(city)



// Practice Questions
// Qsl. Square and sum the array elements using the arrow function and then find the
// average of the array.

