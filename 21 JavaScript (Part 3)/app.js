// String Methods
// Trim Method
// let msg = "     Shubham     ";
// console.log(msg.trim());

// let msg = "    Shu     bham     ";
// console.log(msg.trim());

// let password = prompt("Set Your Password: ");      //In Password Spaces are not available
// let newPass = password.trim();
// console.log(password);   


//toUpperCase and toLowerCase
// let str = "Apna College"
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// let msg = "error";
// console.log(msg.toUpperCase());


//Methods with Arguments : indexOf
// let msg = "ILoveCoding";
// console.log(msg.indexOf("Love"));           //1
// console.log(msg.indexOf("love"));           //-1 (not found)
// console.log(msg.indexOf("o"));              //2 (first time)
// console.log(msg.indexOf("z"));              //-1
// console.log(msg.indexOf("ILoveCoding"));     //0


//Method Chaining
// Basic Method
// let msg = "      hello       ";
// let newMsg = msg.trim();
// console.log("after trim: " + newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after UpperCase: " + newMsg);

// By Method Chaining
// let msg = "         hello           ";
// newMsg = msg.trim().toUpperCase();
// console.log(newMsg);


//Slice Method
// let str = "IloveCoding";
// console.log(str.slice(5));
// console.log(str.slice(1,5));
// console.log(str.slice(-4));

// console.log(str.slice(-4,-11));
// console.log(str.slice(-11,-6));
// console.log(str.slice(-100,-6));
// console.log(str.slice(1,-3));
// console.log(str.slice(-2,1));


// Replace Method
// let msg = "IloveCoding";
// console.log(msg.replace("love", "do"));
// console.log(msg.replace("o", "r"));

// let str= "ApnaApnaapna";
// console.log(str.replace("apna", "College"));
// console.log(str.replace("Apna", "College"));


//Repeat Method
// let msg = "Shub";
// console.log(msg.repeat(3));
// console.log(msg.repeat(0));
// console.log(msg.repeat(-2));    //Error

// let fruit="mango";
// console.log(fruit.repeat(3));


//Practice Qs
// Qs. For the Give String :
// let msg = "      help!";
// Trim it & convert it to uppercase.

// let msg = "      help!";
// console.log(msg.trim().toUpperCase());


// Qs. For the String -> let name : "ApnaCollege", predict the output for following :
// let str = "ApnaCollege";
// console.log(str.slice(4, 9));
// console.log(str.indexOf("na"));
// console.log(str.replace("Apna", "Our"));


// Qs. Separate the "College" part in above string & replace 'I' with 't' in it.
// To replace both the l

//Method 1:
// let str = "ApnaCollege";
// let newStr = str.slice(4).replace("l", "t")
// console.log(newStr.replace("l", "t"));

// Method 2:
// let str = "ApnaCollege";
// console.log(str.slice(4).replace("l", "t").replace("l","t"));


// Arrays
// traditional Method
// let student1 = "aman";
// let student2 = "shradha";
// let student3 = "rajat";

// Using Arrays:
// let students = ["aman", "rajat", "Shubham"];
// console.log(students);

// let array = ["aman", 5 , "rajat", null, undefined, true];
// console.log(array);


// Visualizing Arrays
// let nums = [2,4,6,8];
// console.log(nums);
// console.log(nums[0]);
// console.log(nums[3]);
// console.log(nums[4]);       //undefined
// console.log(typeof(nums));

// Creating Arrays
// let marks = [99, 66, 75, 75, 66];
// let students = ["aman", "rajat", "harsh"];
// let info = ["aman", 25, 6];
// let emptyArray = [];          

// console.log(marks[1]);
// console.log(students[0]);
// console.log(info[2]);
// console.log(info.length);
// console.log(emptyArray.length);
// console.log([].length);         //length of empty array
// console.log([2,5,7].length);
// console.log(info[0]);
// console.log(info[0][1]);        //represents character of that element
// console.log(info[0][2]);
// console.log(marks[0][2]);       //undefined
// console.log(students[1].length);



// Strings are Immutable
// let str = "shubham";
// str[0] = "m";
// console.log(str);       //shubham

//Arrays are Immutable
// let fruits = ["mango", "apple", "banana"];
// fruits[0] = "litchi";
// console.log(fruits);       //Array gets Updated
// fruits[10] = "papaya";      //size of array becomes 11
// console.log(fruits);       
// console.log(fruits[5]);       


// Array Methods
// Push
// let cars = ["audi", "bmw", "xuv", "maruti"];
// console.log(cars);
// cars.push("toyoto");
// console.log(cars);
// console.log(cars.push("ferrari"));      //prints length of array i.e 6
// console.log(cars);                      //prints array

// Pop
// let cars = ["audi", "bmw", "xuv", "maruti"];
// console.log(cars.pop());
// console.log(cars);

// Unshift
// let cars = ["audi", "bmw", "xuv", "maruti"];
// console.log(cars.unshift("toyota"));       //returns length of array i.e 5
// console.log(cars)
// cars.unshift("ferrari");
// console.log(cars)

// Shift
// let cars = ["audi", "bmw", "xuv", "maruti"];
// console.log(cars.shift());              //returns--> audi
// console.log(cars);                  //returns updated array

// let followers = ["a", "b", "c"];
// let blocked = followers.shift();
// console.log(followers);         // returns remaining array
// console.log(blocked);           // returns shifted element


// Practice Qs
// Qs. For the given start state of an array, change it to final form using methods.
// start : ['january', 'july', 'march', 'august']
// final : ['july','june', 'march', 'august']

// let month = ["January", "July", "March", "August"];
// month.shift();
// month.shift();
// month.unshift("June");
// month.unshift("July");
// console.log(month);


// indexOf Method
// let primary = ["red", "yellow", "blue"];
// console.log(primary.indexOf("yellow"));
// console.log(primary.indexOf("green"));
// console.log(primary.indexOf("Yellow"));

// let cars = ["audi", "bmw", "maruti", "xuv"];
// console.log(cars.indexOf("xuv"));       //3
// console.log(cars.indexOf("Xuv"));       //-1
// console.log(cars.indexOf("tata"));      //-1

// includes Method
// let numbers = [44,66,78,5,77,7];
// console.log(numbers.includes(77));          //true
// console.log(numbers.includes(32));          //false


// Concatenation
// let primary = ["red", "yellow", "blue"];
// let secondary = ["orange", "green", "violet"];
// console.log(primary.concat(secondary));
// console.log(primary);
// console.log(secondary.concat(primary));
// console.log(secondary);

// let allColors = primary.concat(secondary);
// console.log(allColors);

// Reverse Method
// let primary = ["red", "yellow", "blue"];
// console.log(primary.reverse());
// console.log(primary);

// let cars = ["audi", "bmw", "maruti", "xuv"];
// console.log(cars.reverse());


// Slice Array Method
// let colors= [ "red", "yellow", "blue", "orange","pink", "white"];
// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(2,5));
// console.log(colors.slice(-2));
// console.log(colors.slice(colors.length-1));         //colors.slice(5)
// console.log(colors.slice(10));          //empty array []
// console.log(colors.slice(-6));
// console.log(colors.slice(-10));


// Splice Method
// let colors= [ "red", "yellow", "blue", "orange","pink", "white"];
// console.log(colors.splice(4));
// console.log(colors);
// console.log(colors.splice(2,1));        //start from index 2 and delete 1 element
// console.log(colors);
// console.log(colors.splice(0,0, "green", "violet"));
// console.log(colors);
// console.log(colors.splice(1, 0, "black"));      //at index 1 add black and delete nothing
// console.log(colors);
// console.log(colors.splice(1,1, "purple"));      //start from endex 1 delete 1 element and add purple at index 1(replacing index 1 element)
// console.log(colors);

// let cars = ["audi", "bmw", "xuv", "maruti"];
// console.log(cars.splice(3));        //removes index 3
// console.log(cars);
// console.log(cars.splice(0,1));      //start from index 1 and remove 1 element
// console.log(cars);
// cars.push("maruti");
// cars.push("ferrari");
// console.log(cars);
// console.log(cars.splice(1,2));      //start from index 1 and remove 2 elements
// console.log(cars);
// console.log(cars.splice(0, 0, "toyota", "xuv", "maruti"));        //adds these 3 elements at index 0 and deletes nothing 
// console.log(cars);
// console.log(cars.splice(1, 0, "mercedes"));        //start from index 1 and delete nothing and add element at index 1
// console.log(cars);
// console.log(cars.splice(1,1, "gwagon"));            //start from index 1 and delete 1 element and add gwagon at index 1 (inshort replacing)


// Sort in Arrays
// let days = ["monday", "sunday", "wednesday", "tuesday"];
// console.log(days.sort());
// console.log(days);

// let squares = [26, 16,4,49,36,9];
// console.log(squares.sort());

// let nums = [26, 16, 04, 49,36, 09];     //ignores starting zeroes
// console.log(nums.sort());           //gets the same output

// let chars = ['b', 'd', 'e', 'a'];
// console.log(chars.sort());
// console.log(chars);


// Practice Qs
// Qs. For the given start state of an array, change it to final form using splice.
// start : ['january', 'july', 'march', 'august']
// final : [ 'july', 'june', 'march', 'august']

// let month = ["january", "july", "march", "august"];
// month.splice(0,2, "july", "june");
// console.log(month);

// Qs. Return the index of the "javascript" from the given array, if it was reversed.
// let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#' ,'sql'];
// lang.reverse();
// console.log(lang.indexOf("javascript"));

// Method 2:
// let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#' ,'sql'];
// console.log(lang.reverse().indexOf("javascript"))


// Arrays References
// console.log("name"=="name");
// console.log("name"==="name");

// console.log([1]==[1]);
// console.log([1]===[1]);         //always false

// console.log([]==[]);        //false
// console.log([]==[]);        //false (reason: array references)

// let arr = ['a', 'b', 'c'];
// let arrCopy = arr;
// console.log(arr == arrCopy);        //true
// console.log(arr === arrCopy);        //true
// arr.push('d');
// console.log(arr);
// console.log(arrCopy);
// arrCopy.pop('a');
// console.log(arr);
// console.log(arrCopy);

//here arr and arrCopy will have different memory location
// let arr = ['a', 'b', 'c'];
// let arrCopy = ['a', 'b', 'c'];
// arr.push('d');
// console.log(arr);
// console.log(arrCopy);


// Constant Arrays
// const arr =[1,2,3];
// arr.push(4);            //no error
// console.log(arr);
// arr.pop(2);
// console.log(arr);

// const arr = [1,2,3];
// arr = [1,2];                 //error(Assignment to constant variable)
// let cars = ["bmw", "audi", "tesla"];
// arr = cars;                  //error
// cars = arr;                  // no error as cars is not a const var
// console.log(cars);           // o/p: [1,2,3]


// Nested Arrays
// let nums = [[1,2], [3,4], [4,5,6]];
// console.log(nums);
// console.log(nums.length);       //3
// console.log(nums[0]);
// console.log(nums[0].length);
// console.log(nums[0][1]);        //2
// console.log(nums[0][3]);        //undefined

// let nums = [[[1,2],[1]],[1,2,[3,4]],1,[2,3]];
// console.log(nums);
// console.log(nums.length);           //4


// Practice qs
// Qs. Create a nested array to show the following tic-tac-toe game state.

// let game = [['X', null , 'O'], [null, 'X', null], ['O', null , 'X']];
// console.log(game);
// game[0][1] = 'O';
// console.log(game);
// game[2][1] = 'O';


//Assignment Qs
// Qsl . Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [7, 9, 0]

// let n = 2;
// let arr = [7,9,0,2,-1,5];
// let ans = arr.slice(0,n);
// console.log(ans);

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, O, -2]

// n = 3;
// let arr = [7,9,0,2,-1,5];
// ans = arr.slice(arr.length-n);
// console.log(ans);

// Qs3. Write a JavaScript program to check whether a string is blank or not.
// let str = prompt("Please Enter String: ");
// if(str.length == 0){
//     console.log("Blank String");
// } else {
//     console.log("Not a Blank String");
// }


// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

// let str = "ApNaCoLlEgE";
// let idx = 4;
// if(str[idx] == str[idx].toLowerCase()){
//     console.log("YES, lower case");
// }else{
//     console.log("NO, its Uppercase");   
// }

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
// let str = "     Shubham   ";
// console.log(`original string: ${str}`);
// console.log(`Trimmed string: ${str.trim()}`);

// Qs6. Write a JavaScript program to check if an element exists in an array or not.
// let arr = [12,34,64,7,8];
// let element = 34;
// if(arr.indexOf(element) == -1){
//     console.log("Element Not Present");
// } else{
//     console.log("Element present at index: "+ arr.indexOf(element));
// }