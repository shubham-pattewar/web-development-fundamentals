// async functions
// async function greet() {
//   return "hello!";            //fulfilled state
// }
// console.log(greet())


// async function greet() {
//   abc.abc();                  // rejected state
//   return "hello!";
// }
// console.log(greet())


// async function greet(){
//   throw "some random error";      // throws error
// }
// console.log(greet())      


// async function greet(){
//   throw "404 page not found";
//   return "hello!";
// }
// greet()
// .then(()=>{
//   console.log("promise was resolved")
//   console.log("result was: ", result)
// })
// .catch((err) => {
//   console.log("promise was rejected with err: ", err);
// })


// let demo = async() => {
//   return 5;
// };
// console.log(demo());



// await Keyword
// function getNum(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo(){      //gets different random numbers
//   await getNum();     
//   await getNum();
//   await getNum();
//   await getNum(); 
//   getNum();
// }
// console.log(demo());


// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         h1.style.color = color;
//         console.log(`color changed to ${color}`);
//         resolve("color changed!");
//     }, delay)
//   })
// }

// async function demo() {
//   await changeColor("red", 1000);
//   await changeColor("orange", 1000);
//   await changeColor("green", 1000);
//   changeColor("blue", 1000);
// }

// demo();



// Handling rejections
// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//       let num = Math.floor(Math.random()*5)+1;
//       if(num>3){
//         reject("promise rejected");
//       }
//       h1.style.color = color;
//       console.log(`color changed to ${color}`);
//       resolve("color changed!");
//     }, delay)
//   })
// }

// async function demo() {
//   try{
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//   } catch(err){
//     console.log("error caughted");
//     console.log(err);
//   }
  
//   //after getting error this will work if you use try and catch
//   let a = 5;
//   console.log(a);
//   console.log("new Number = ", a+3);
// }

// demo();



// Accessing JSON data
// let jsonRes = 
//   '{"fact":"Cats make about 100 different sounds. Dogs make only about 10.","length":62}'

// let validRes = JSON.parse(jsonRes);

// console.log(jsonRes);       // string format
// console.log(validRes);      // JS Object Format
// console.log(validRes.fact);


// let student = {
//   name: "shubham",
//   marks: 98
// }

// console.log(JSON.stringify(student));



// Our First API request
// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res)=> {
//     console.log(res);
//     return res.json()
//   })
//   .then((data) => {
//       console.log(data);
//       console.log(data.fact);
//     })
//   .catch((err) => {
//     console.log("ERROR - ", err)
//   })


// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res)=> {
//     return res.json()
//   })
//   .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data2 = ", data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err)
//   })




// Using Fetch with async-await
let url = "https://catfact.ninja/fact";

async function getFacts() {
  try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch(e){
    console.log("Error - ", e);
  }
}

console.log(getFacts());