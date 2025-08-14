// console.log("Hello World")
// console.log("Apna College")

// let a=10;
// let b=5;
// sum = a+b
// console.log(sum);

// let pencilPrice = 10;
// let eraserPrice = 5;

// output = "The total price is: " + (pencilPrice + eraserPrice) + " Rupees";
// console.log(output);

// console.log("The total price is:", pencilPrice + eraserPrice, "Rupees")

// console.log(`The total price is: ${pencilPrice + eraserPrice} Rupees`)

//Operators
//Arithmetic Operators
// let a=10;
// let b=5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

//Unary Operators
// console.log(a++);
// console.log(++a);

//Comparison Operator
// let age = 18;
// console.log(age > 18);      //false


//if Statement
// console.log('before if');
// let age=23;
// if(age>=18){
//     console.log("you can vote");
// }
// console.log('after if');


//Practice Question
//Traffic light
// let color="red"
// if(color==="red"){
//     console.log("Stop");
// }
// if(color==="yellow"){
//     console.log("Wait");
// }
// if(color==="green"){
//     console.log("Go");
// }


//else if
// let age=14;
// if(age >= 18){
//     console.log("You can vote")
// }
// else if(age<=18){
//     console.log("You cannot Vote")
// }
// else if(age<=18){
//     console.log("You cannot Vote")
// }

// let marks= 45;
// if(marks >= 80){
//     console.log("Grade: A+");
// } else if(marks >= 60){
//     console.log("Grade: A");
// } else if(marks >= 33){
//     console.log("Grade: B");
// }   else if(marks < 33){
//     console.log("Grade: F");
// }

// let month = "January";
// if (month==="January"){
//     console.log("Winter is Here");
// } else if (month==="April"){
//     console.log("Summer is Here");
// }

// let color="red"
// if(color==="red"){
//     console.log("Stop");
// }
// else if(color==="yellow"){
//     console.log("Wait");
// }
// else if(color==="green"){
//     console.log("Go");
// }


//else statement
// let age = 18;
// if (age>=18){
//     console.log("You can Vote");
// } else {
//     console.log("You cannot vote");
// }

// let color="white"
// if(color==="red"){
//     console.log("Stop");
// }
// else if(color==="yellow"){
//     console.log("Wait");
// }
// else if(color==="green"){
//     console.log("Go");
// }
// else{
//     console.log("Undefined Color")
// }

//Practice Qs
// Qs. Create a system to calculate popcorn prices based on the size customer asked for :
// if size is 'XL', price is Rs. 250
// if size is 'L', price is Rs. 200
// if size is 'M', price is Rs. 100
// if size is 'S', price is Rs. 50

// let size = "M";
// if(size==="XL"){
//     console.log("Price: Rs.250");
// } else if(size==="L"){
//     console.log("Price: Rs.200");
// } else if(size==="M"){
//     console.log("Price: Rs.100");
// } else if(size==="S"){
//     console.log("Price: Rs.50");
// } else{
//     console.log("This size is not Available");
// }


//Nested if-else
// let marks=45;
// if (marks >= 33){
//     console.log("Pass")
//     if(marks>=80){
//         console.log("Grade: O");
//     } else{
//         console.log("Grade: A")
//     }
// } else{
//     console.log("Better Luck next time")
// }


//Logical Operators
//Logical AND(&&)
// let marks= 90;
// if(marks>=33 && marks>=80){
//     console.log("Pass");
//     console.log("A+");
// }

//Logical OR(||)
// let marks = 90;
// if(marks >= 33 || marks >= 80){
//     console.log("Pass");
//     console.log("A+");
// }

//Logical NOT(!)
// let marks = 90;
// if(!(marks<33)){
//     console.log("Pass");
//     console.log("A+");
// }

//combining multiple statements
// let marks=73;
// if((marks > 33 && marks <= 80) || !false){
//     console.log("Pass");
// }


//Practice Qs
// Qs. A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a
// Program to find if a string is good or not.

// let str = "apple";
// if ((str[0] === 'a') && (str.length) > 3){
//     console.log("Good String");
// } else {
//     console.log("Not a Good String");
// }

// Qs. Predict the output of following code :
// Go left to right
// let num = 12;
// if((num % 3 == 0) && ((num+1 == 15) || (num-1 == 11))){
//     console. log ( "safe" ) ;
// } else {
// console. log ("unsafe") ;
// }


//truthy and falsy
//Here VS Code detects that the else conditon will not work always
//so it is written in darkish format
// if(true){
//     console.log("it has true value");
// } else{
//     console.log("it has false value");
// }

// if(1){
//     console.log("it has true value");
// } else{
//     console.log("it has false value");
// }

// if(0){
//     console.log("it has true value");
// } else{
//     console.log("it has false value");
// }

// if(""){
//     console.log("it has true value");
// } else{
//     console.log("it has false value");
// }

// if(null){
//     console.log("it has true value");
// } else{
//     console.log("it has false value");
// }

// if(undefined){
//     console.log("it has true value");
// } else{
//     console.log("it has false value");
// }

// if("apna college"){
//     console.log("it has true value");
// } else{
//     console.log("it has false value");
// }

// Empty space also has a true value
// if(" "){
//     console.log("it has true value");
// } else{
//     console.log("it has false value");
// }

// let string = ""
// if(string){
//     console.log("String is not Empty");
// } else{
//     console.log("String is Empty");
// }

// let num = 0;
// if(num){
//     console.log("No. is not equal to 0");
// } else{
//     console.log("No. is equal to 0");
// }


//Switch Statements
// let color= "yellow"
// switch(color){
//     case "red" :
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Slow Down");
//         break;
//     case "green":
//         console.log("GO");
//         break;
//     default:
//         console.log("Broken Light");
// }


//Practice Qs
// Qs. Use switch statement to print the day of the week using a number variable 'day' with
// values 1 to 7.
// 1 = Monday, 2 : Tuesday & so on

// let day = 5;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Not a Day");
// }


// Alerts and Prompts
// alert("something is wrong!!!!");
// alert("this is a simple alert!!");

// console.log("This is a simple log");
// console.error("This is an Error Message");

// console.warn("This is an Warning Message");

// prompt("Enter Your Name: ");

//To store the prompt in a variable
// let fName = prompt("Enter Your Name: ");
// console.log(fName);

// let roll = prompt("Enter Your Roll No.: ");
// console.log(roll);

// let fName = prompt("Enter Your First Name: ");
// let lName = prompt("Enter Your Last Name: ");
// console.log("Welcome", fName, lName + "!");

// let fName = prompt("Enter Your First Name: ");
// let lName = prompt("Enter Your Last Name: ");
// let msg = "Welcome " + fName + " " + lName + "!";
// alert(msg);