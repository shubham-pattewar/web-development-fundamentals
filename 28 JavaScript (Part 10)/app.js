// Mouse / Pointer Events
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     alert("button was clicked")
// }

// function sayHello() {
//     alert("Hello");
// }
// btn.onclick = sayHello;         //changing the function


// let btns = document.querySelectorAll("button");
// for(btn of btns) {
//     btn.onclick = sayHello;
// }

// function sayHello() {
//     alert("Hello");
// }


// let btns = document.querySelectorAll("button");
// for(btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function() {
//         console.log("You entered a button")
//     }
// }

// function sayHello() {
//     alert("Hello");
// }



// Event Listeners
// let btns = document.querySelectorAll("button");
// for (btn of btns){
//     btn.addEventListener("click", sayHello)
//     btn.addEventListener("click", sayName)
// }

// function sayHello(){
//     alert("Hello");
// }
// function sayName(){
//     alert("Shubham")
// }


// let btns = document.querySelectorAll("button");
// for (btn of btns){
//     btn.addEventListener("dblclick", function(){
//         console.log("You Double Clicked");
//     })
// }

// function sayHello(){
//     alert("Hello");
// }
// function sayName(){
//     alert("Shubham")
// }



// Activity (Random Color Generator)
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     console.log("Color Updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }



// Event Listeners for Elements
// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     console.log("paragraph was clicked");
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("Mouse Inside Box")         //when you enter mouse inside bosx => it will print the message
// })



// this in Event Listeners
// let btn = document.querySelector('button');

// btn.addEventListener("click", function(){
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })


// Method 1: (Lengthy Method for applying single event listener on multiple objects)
// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');

// btn.addEventListener("click", function(){
//     console.dir(this.innerText);    
//     this.style.backgroundColor = "blue";
// })
// p.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })
// h1.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })
// h3.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })


// Method 2: (Less Redundant Method for applying single event listener on multiple objects)
// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor)
// p.addEventListener("click", changeColor)
// h1.addEventListener("click", changeColor)
// h3.addEventListener("click", changeColor)



// Keyboard Events
// let btn = document.querySelector('button');
// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// })


// let btn = document.querySelector('button');
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// })


// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(){
//     console.log("key was pressed");
// })


// let inp = document.querySelector("input");
// inp.addEventListener("keyup", function(){
//     console.log("key was released");
// })


// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event){
//     console.log(event);
//     console.log("key was pressed");
// })


// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event){
//     console.log("key = ", event.key);
//     console.log("code = ", event.code);
// })


// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event){
//     console.log("code = ", event.code);     ///ArrowUP(U), ArrowOown(D), ArrowLeft(L), ArrowRight(R)
//     if(event.code == "ArrowUp" || event.code == "KeyU"){
//         console.log("character moves forward");
//     } else if(event.code == "ArrowDown" || event.code == "KeyD"){
//         console.log("character moves downward");
//     } else if(event.code == "ArrowLeft" || event.code == "KeyL"){
//         console.log("character moves Left");
//     } else if(event.code == "ArrowUp" || event.code == "KeyR"){
//         console.log("character moves Right");
//     }
// })



// Form Events
// let form = document.querySelector("form");
// form.addEventListener("submit", function(){
//     alert("Form Submitted");
// })


// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();         //you will not be directed to the next page
//     alert("Form Submitted");   
// })



// Extracting Form Data
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.dir(inp.value);
// })


// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`)
// })


// Another Method
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.dir(form);

//     // // Accessing form elements using elements method
//     // console.log(form.elements);
//     // console.log(form.elements[0]);
//     // console.log(form.elements[1]);

//     let user = this.elements[0];        //form.elements[0]
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`)
// })



// More Events
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function(){
//     console.log("input event");
//     console.log("final value = ", user.value);
// });



let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function(){
    console.log(inp.value);
    p.innerText = inp.value;
});


