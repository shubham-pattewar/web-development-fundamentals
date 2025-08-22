// console.log(document)
// console.dir(document)

// console.dir(document.all)
// console.dir(document.all[8])

// console.dir(document.all[8].innerText)
// document.all[8].innerText = "IronMan"



// Select Element by ID
// console.log(document.getElementById(mainImg));      //null(as it is not a variable)
// console.log(document.getElementById("mainImg"));        //it is a object

// imgObj = document.getElementById("mainImg");
// console.log(imgObj);
// console.dir(imgObj);

// console.log(imgObj.src);
// console.log(imgObj.tagName);

// imgObj.src = "assets/creation_1.png"

// console.log(document.getElementById("description"));
// console.dir(document.getElementById("description"));

// console.log(document.getElementById("abcd"))     //null



// Selecting Elements by Class Name
// console.log(document.getElementsByClassName("oldImg"));
// console.log(document.getElementsByClassName("oldImg")[0]);      //index 0
// console.log(document.getElementsByClassName("oldImg")[1]);      //index 1


// let smallImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i< smallImages.length; i++){
//     console.dir(smallImages[i]);
// }


// let smallImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i< smallImages.length; i++){
//     console.dir(smallImages[i].src);        //source of each image
// }


// let smallImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i< smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";        //changing source of each image
//     console.log(`value of image no. ${i} is changed`);
// }



// Selecting Elements by Tag Name
// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByTagName("p")[1].innerText = "abc");       //changing value of paragraph



// Query Selector
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));
// console.dir(document.querySelectorAll("div a"));
// console.dir(document.querySelectorAll("p"));



// Setting Content in Objects
// let para = document.querySelector('p');
// console.dir(para)
// console.log(para.innerText);
// console.log(para.textContent)
// console.log(para.innerHTML);

// para.innerText = "abc";     //changes the value
// para.innerText = "Hi I am Peter Parker!";

// para.innerText = "Hi, I am <b>Peter Parker!</b>";       //it will get bold


// let heading = document.querySelector('h1');
// console.log(heading.innerText);
// heading.innerHTML = "<u>Spider Man</u>";

// heading.innerHTML = `<u>${heading.innerText}</u>`;



// Manipulating Attributes
// let img = document.querySelector('img');
// console.log(img.getAttribute('id'));
// img.setAttribute('id', 'spidermanImg')

// img.setAttribute('src', './assets/creation_3.jpeg')

// console.log(img.getAttribute('class'));      //null(as img doesnt have any class)
// img.setAttribute('class', 'images');
// console.log(img.getAttribute('class'));      //image will get the class



// Manipulating Style(with Style Attribute)
// let img = document.querySelector('img');
// console.dir(img);
// console.log(img.style);

// let heading = document.querySelector('h1');
// console.log(heading.style);
// heading.style.color = 'purple';
// heading.style.backgroundColor = 'red';


// let links = document.querySelectorAll('.box a');
// for(let i=0; i < links.length; i++){
//     links[i].style.color = 'purple';
// }


// let links = document.querySelectorAll('.box a');
// for(link of links){
//     link.style.color = "purple";     //inline styling
// }



// classList Property
// let img = document.querySelector('img');
// console.log(img.classList);

// let heading = document.querySelector('h1');
// console.log(heading.classList);

// heading.classList.add("abc");
// console.log(heading.classList);

// heading.classList.add("green");
// heading.classList.add("underline");

// heading.classList.remove("green");      //it will remove the class named as "green"

// heading.setAttribute('class', 'green');     // we dont use this much you can set only one class here(previous all classes will get deleted) 

// console.log(heading.classList);
// console.log(heading.classList.contains("underline"));       //false

// console.log(heading.classList);
// console.log(heading.classList.toggle("green"));
// console.log(heading.classList);         //None
// console.log(heading.classList.toggle("underline"));     //it will add new class named "underline"


// let box = document.querySelector(".box");
// console.log(box.classList);
// box.classList.add("yellowBg");      // the changes made her will also be added to the html document also
// console.log(box.classList);



// Navigation on Page
// let h4 = document.querySelector('h4');
// console.log(h4.parentElement);

// console.log(h4.children);       //empty


// let box = document.querySelector('.box');
// console.log(box.children);
// console.log(box.childElementCount);


// let ul = document.querySelector('ul');
// console.log(ul.parentElement);
// console.log(ul.childElementCount);
// console.log(ul.children);


// let ul = document.querySelector('ul');
// console.log(ul.children)
// console.log(ul.children[0])
// console.log(ul.children[1])
// console.log(ul.children[2])

// console.log(ul.children[1].previousElementSibling);
// console.log(ul.children[2].nextElementSibling);


// let img = document.querySelector('img');
// console.log(img.previousElementSibling);
// console.log(img.previousElementSibling.style);
// console.log(img.previousElementSibling.style.color = "green");



// Adding Elements on Page
// console.log(document.createElement('p'));
// let newP = document.createElement('p');
// console.dir(newP);
// newP.innerText = "Hi, I am a new Paragraph";
// console.dir(newP);

// let body = document.querySelector('body');
// body.appendChild(newP)      // adds at the end
// console.dir(newP);

// let box = document.querySelector('.box');
// box.appendChild(newP);

// let btn = document.createElement('button');
// console.dir(btn);

// btn.innerText = "click me!"
// box.appendChild(btn);       // this will insert the button in the box

// console.log(newP);
// newP.append("this is new text");        //changing in the same para

// newP.append(btn);        // there will be button inside paragraph

// newP.append("do not click this button");

 
// let btn = document.createElement('button');
// btn.innerHTML = "NEW BUTTON!!";
// let p = document.querySelector('p');
// console.log(btn);

// p.insertAdjacentElement('beforebegin', btn)
// p.insertAdjacentElement('afterbegin', btn)
// p.insertAdjacentElement('beforeend', btn)
// p.insertAdjacentElement('afterend', btn)



// Removing Elements from Page
// let body = document.querySelector('body');
// let newP = document.createElement('p');
// let box = document.querySelector('.box');
// box.appendChild(newP);

// let btn = document.createElement('button');
// console.dir(btn);
// btn.innerText = "click me!"
// box.appendChild(btn);

// box.removeChild(btn);       //removes button from box

// newP.remove();



// Practice Qs
// Add the following elements to the container using only JavaScript and the DOM methods.
// i) a <p> with red text that says "Hey I'm red!"
// ii) an <h3> with blue text that says "I'm a blue h3!"
// iii) a <div> with a black border and pink background color with the following elements inside of it:
// • another <h1> that says "I'm in a div"
// • a <p> that says "ME TOO!"

// let para1 = document.createElement('p');
// para1.innerText = "Hey I am red!";
// document.querySelector('body').append(para1);
// para1.classList.add("red");


// let h3 = document.createElement("h3");
// h3.innerText = "I'm a blue h3!";
// document.querySelector('body').append(h3);
// h3.classList.add("blue");


// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm in a div";
// para2.innerText = "ME TOO!!"

// div.append(h1);
// div.append(para2);
// div.classList.add("boxx");
// document.querySelector("body").append(div);



// Practice Qs
// Qsl. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me";

let btn = document.createElement("button");
btn.innerText = "Click Me!!"
document.querySelector("body").append(btn);


// Qs2. Add following attributes to the element
// - Change placeholder value of input to "username"
// - Change the id of button to "btn"


