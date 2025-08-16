let todo=[];
let request = prompt("Please Enter Your Request: ");

while(true){
    if(request == "quit"){
        console.log("Quitting...");
        break;
    }

    if(request == "list"){
        console.log("---------------");
        for(let i=0 ; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------");
    } 
    else if(request == "add"){
        let task = prompt("Enter the task to add: ");
        todo.push(task);
        console.log("task added");
    } 
    else if(request == "delete"){
        let index = prompt("please enter the task index to remove: ");
        todo.splice(index,1);
        console.log("task deleted")
    } 
    else{
        console.log("Invalid Request");
    }
    
    request = prompt("Please Enter Your Request: ");
}