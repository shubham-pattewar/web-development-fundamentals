// Event Bubbling
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();            //try after removing this
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }



// Building ToDo with DOM and Event Delegation
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
//     let item = document.createElement("Li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);

//     ul.appendChild(item);
//     inp.value = "";
// })

// ul.addEventListener("click", function(event){            //due to event bubbling
//     if(event.target.nodeName == "BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("deleted");
//     }
// })

// // this delete button section will not work for new buttons(to solve this use Event Delegation)
// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }






