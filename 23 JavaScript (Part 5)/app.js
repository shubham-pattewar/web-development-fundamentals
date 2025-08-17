// Creating Object Literals
// const student = {
//     name: "shradha",
//     age: 23,
//     marks: 94.4,
//     city: "Delhi"
// };
// console.log(student);

// let student2 = ["shubham", 20, 90.4];
// console.log(student2);

// const item = {
//     price: 100.99,
//     discount: 50,
//     colors = ["pink", "red"];
// };

// Creating a Post
// const post = {
//     username: "@shub.patt",
//     content: "Good Morning!!",
//     likes: 345,
//     reposts: 22,
//     tags: ["@apnacollege", "@sigma", "@delta"]
// };
// console.log(post);

// Get Values
// const post = {
//     username: "@shub.patt",
//     content: "Good Morning!!",
//     likes: 345,
//     reposts: 22,
//     tags: ["@apnacollege", "@sigma", "@delta"]
// };

// console.log(post.username);
// console.log(post["likes"]);
// console.log(post["tags"]);
// console.log(post."tags");           //error (Unexpected String)  
// console.log(post[content]);         //error (Uncaught ReferenceError: content is not defined)

// In some cases we cant use . operator
// let prop = "reposts";
// console.log(post[prop]);        //22
// console.log(post.prop);         //undefined         


// Conversion in get values
// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };
// console.log(obj);
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj[null]);
// console.log(obj[undefined]);

// console.log(obj.1);     //error(Uncaught SyntaxError: Unexpected number) . operator doesnt convert number into string


// Add/Update Values
// const student = {
//     name: "shubham",
//     age: 23,
//     marks: 94.4,
//     city: "Delhi"
// };
// console.log(student);
// student.city = "Mumbai";
// console.log(student);
// student.gender = "Male";
// console.log(student);
// student.marks = "A";
// console.log(student);
// student.marks = [90,77,88];
// console.log(student);
// delete student.marks;
// console.log(student);


// Nested Objects
// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     shradha:{
//         grade: "A",
//         city: "Pune"
//     },
//     karan:{
//         grade: "O",
//         city: "Mumbai"
//     }
// };

// console.log(classInfo);
// console.log(classInfo.aman);
// console.log(classInfo.shradha);
// console.log(classInfo.shradha.city);
// classInfo.shradha.city = "Gurgaon";
// console.log(classInfo);


// Array of Objects
// const classInfo = [
//     {
//         name: "shradha",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "shradha",
//         grade: "A+",
//         city: "Pune"
//     },
//     {
//         name: "Karan",
//         grade: "O",
//         city: "Mumbai"
//     }
// ];
// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[1]);
// console.log(classInfo[2]);
// console.log(classInfo[1].name);
// console.log(classInfo[2].grade);
// console.log(classInfo[0].city);
// classInfo[1].city = "Nanded";
// console.log(classInfo[1]);
// classInfo[1].gender = "Female";
// console.log(classInfo);


// Math Object
// console.log(Math);
// console.log(Math.abs(-12.44));
// console.log(Math.abs(-12));
// console.log(Math.abs(34));
// console.log(Math.abs(0));

// console.log(Math.pow(2,4));
// console.log(Math.pow(2,-2));

// console.log(Math.floor(5));
// console.log(Math.floor(5.9999));
// console.log(Math.floor(-7));
// console.log(Math.floor(-7.877666));

// console.log(Math.ceil(2));
// console.log(Math.ceil(-2));
// console.log(Math.ceil(2.9999));
// console.log(Math.ceil(-2.999));

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());


// Random Integers
// let step1 = Math.random();
// console.log(step1);
// let step2 = step1 * 10;
// console.log(step2);
// let step3 = Math.floor(step2);
// console.log(step3);

// Do it in one line...
// console.log(Math.floor(Math.random()*10));       //you will never get 10
// console.log(Math.floor(Math.random()*10) + 1);       //you will get no. between 1 to 10


// Practice Qs
// Generate a random number between 1 and 100.
// console.log(Math.floor(Math.random()*100) + 1)

// Generate a random number between 1 and 5.
// console.log(Math.floor(Math.random()*5) + 1)

// Generate a random number between 20 and 25.
// console.log(Math.floor(Math.random()*5) + 20)       //generates between 20,21,22,23,24
// console.log(Math.floor(Math.random()*5) + 21)       //generates between 21,22,23,24,25


// Guessing Game
// const max = prompt("Enter the Max Number: ");

// const random = Math.floor(Math.random()*max) + 1;
// console.log(random);

// let guess = prompt("Guess the Number: ");

// while(true){
//     if (guess == "quit"){
//         console.log("quitting...");
//         break;
//     }
//     if (guess == random){
//         console.log("You are Right!! Random Number was "+ random);
//         break;
//     } else if(guess < random){
//         guess = prompt("hint: Your Guess was Small. Please try again");
//     } else if(guess > random){
//         guess = prompt("hint: Your Guess is larger. Please try again");
//     }
// }   


// Assignemnts
// Qsl . Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

// console.log(Math.floor(Math.random()*6) + 1);


// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car's name.

// let car = {
//     name: "GWagon",
//     model: 2024,
//     color: "grey",
// }
// console.log(car.name);


// Qs3. Create an object Person with their name, age and city.
// Edit their city's original value to change it to "New York".
// Add a new property country and set it to the United States.

// let person = {
//     name: "Shubham",
//     age: 21,
//     city: "Nanded"
// };
// person.city = "New York";
// person.country = "United States";
// console.log(person);


