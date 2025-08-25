// JS Call Stack
// function hello(){
//     console.log("inside hello fxn");
//     console.log("Hello");
// }

// function demo(){
//     console.log("calling hello fxn");
//     hello();
// }

// console.log("calling demo fxn");
// demo();
// console.log("done, bye");



// Visualizing the Call Stack
// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();



// Breakpoints
// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();



// JS is Single Threaded
// let a = 25;
// console.log(a);
// let b = 10; 
// console.log(b);
// console.log(a+b);


// synchronous nature
// setTimeout(()=>{
//     console.log("Shubham");
// }, 2000);
// setTimeout(()=>{
//     console.log("Harsh");
// }, 2000);
// console.log("hello...")



// Callback Hell

// Method 1:
// h1 = document.querySelector("h1");

// setTimeout(()=> {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(()=> {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(()=> {
//     h1.style.color = "green";
// }, 3000);


// Method 2:
// h1 = document.querySelector("h1");

// function changeColor(color) {
//     h1.style.color = color;
// }

// setTimeout(changeColor("red"), 1000);
// setTimeout(changeColor("orange"), 2000);
// setTimeout(changeColor("green"), 3000);


// Method 3: callbacks nesting(Callback Hell) => Solution: promises, async and await
// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay)
// }

// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000);
//         });
//     });
// });




// Setting up for Promises
// if first data is saved then only save 2nd data similarly for third one
// function savetoDB(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10) +1;
//     if(internetSpeed > 4){
//         success();
//     } else{
//         failure();
//     }
// }

// savetoDB(
//     "shubham", 
//     () => {
//       console.log("success: your data was saved");
//       savetoDB(
//         "hello world", 
//         () => {
//             console.log("success2: data2 saved");
//             savetoDB(
//               "shubham", 
//               () => {
//                 console.log("success3: data3 saved");
//               }, 
//               () => {
//                 console.log("failure3: weak connection");
//               }
//           );
//         }, 
//         () => {
//             console.log("failure2: weak connection");
//         }
//       );
//     }, 
//     () => {
//       console.log("failure: your data was not saved");
//     }
// );



// Refactoring with Promises
// function savetoDB(data){
//     return new Promise((resolve, reject) => {
//       let internetSpeed = Math.floor(Math.random()*10) +1;
//       if(internetSpeed > 4) {
//         resolve("success: data was saved");
//       } else {
//         reject("failure: weak connection");
//       }
//     });
// }

// console.log(savetoDB("apna college"));        // run it again and again



// then and catch methods
// function savetoDB(data){
//     return new Promise((resolve, reject) => {
//       let internetSpeed = Math.floor(Math.random()*10) +1;
//       if(internetSpeed > 4) {
//         resolve("success: data was saved");
//       } else {
//         reject("failure: weak connection");
//       }
//     });
// }

// let request = savetoDB("apna college");
// request.then (() => {
//   console.log("promise was resolved");
//   console.log(request);
// })
// .catch(()=>{
//   console.log("promise was rejected");
//   console.log(request);
// })


// function savetoDB(data){
//     return new Promise((resolve, reject) => {
//       let internetSpeed = Math.floor(Math.random()*10) +1;
//       if(internetSpeed > 4) {
//         resolve("success: data was saved");
//       } else {
//         reject("failure: weak connection");
//       }
//     });
// }

// savetoDB("apna college")       //shorter version
//   .then (() => {
//     console.log("promise was resolved");
//   })
//   .catch(()=>{
//     console.log("promise was rejected");
//   })



// Promise Chaining
// function savetoDB(data){
//     return new Promise((resolve, reject) => {
//       let internetSpeed = Math.floor(Math.random()*10) +1;
//       if(internetSpeed > 4) {
//         resolve("success: data was saved");
//       } else {
//         reject("failure: weak connection");
//       }
//     });
// }

// savetoDB("apna college")
//   .then (() => {
//     console.log("data1 saved");
//     return savetoDB("helloworld");
//   })
//   .then(()=>{
//     console.log("data2 saved");
//     return savetoDB("shubham");
//   })
//   .then(()=>{
//     console.log("data3 saved");
//   })
//   .catch(()=>{
//     console.log("promise was rejected");
//   })



// Results and Errors in Promises
// function savetoDB(data){
//     return new Promise((resolve, reject) => {
//       let internetSpeed = Math.floor(Math.random()*10) +1;
//       if(internetSpeed > 4) {
//         resolve("success: data was saved");
//       } else {
//         reject("failure: weak connection");
//       }
//     });
// }

// savetoDB("apna college")
//   .then ((result) => {
//     console.log("data1 saved");
//     console.log("result of promise: ", result);
//     return savetoDB("helloworld");
//   })
//   .then((result)=>{
//     console.log("data2 saved");
//     console.log("result of promise: ", result);
//     return savetoDB("shubham");
//   })
//   .then((result)=>{
//     console.log("data3 saved");
//     console.log("result of promise: ", result);
//   })
//   .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("error of promise: ", error);
//   })



// Refactoring old code
h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=>{
        h1.style.color = color;
        resolve("color changed!");
    }, delay)
  })
}

changeColor("red", 1000)
.then(() => {
  console.log("red color was completed");
  return changeColor("orange", 1000);
})
.then(() =>{
  console.log("orange color was completed");
  return changeColor("green", 1000);
})
.then(() => {
  console.log("green color was completed");
  return changeColor("blue", 1000);
})
.then(() => {
  console.log("blue color was completed");
})
