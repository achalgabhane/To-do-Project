let todoContainerEl = document.getElementById("todoContainer");
let userTodoEl = document.getElementById("userTodo");
//console.log(todoContainer);

let todoList = [
    {
        title: "HTML",
        id: 1
    },
    {
        title: "CSS",
        id: 2
    },
    {
        title: "BOOTSTRAP",
        id: 3
    }
    
]

// function createAndAppendTodo(todo){
//     //console.log(todo);
//     let headingEl = document.createElement("h1");
//     headingEl.textContent = todo.title;
//     todoContainerEl.appendChild(headingEl);
    
// }

//let isChecked = true;


function onTodoStatusChange(titleId, checkboxId){
    //console.log("outer onchange function is running");
    let myTitleEl = document.getElementById(titleId);
    let myCheckboxEl = document.getElementById(checkboxId);
    
    //console.log(myCheckboxEl.checked);
    
    //console.log(myTitleEl);

    if(myCheckboxEl.checked === true){
        myTitleEl.classList.add("checked");
       // isChecked = false;
    }
    else{
        myTitleEl.classList.remove("checked")
       // isChecked = true;
    }

 }

 function onTodoDelete(todoId){
    let myTodoEl = document.getElementById(todoId);
    //console.log(myTodoEl);
    todoContainerEl.removeChild(myTodoEl);
 }

 function onAddnewTodo(){
    let userInVal = userTodoEl.value;

    let newTodo ={
        title: userInVal,
        id: 4
    }

    createAndAppendTodo(newTodo)
    userTodoEl.value ="";

 }
function createAndAppendTodo(todo){

//id
        let checkboxId = "myCheckbox" + todo.id;
// console.log(checkboxId );

       let titleId = "myTitle" + todo.id;

       let todoId ="myTodo" + todo.id;

    let listContEl = document.createElement("li");
    listContEl.classList.add("list-cont-todo");
    listContEl.id = todoId;
     todoContainerEl.appendChild(listContEl);

     //checkbox
     let checkBoxEl = document.createElement("input");
     checkBoxEl.type ="checkbox"
     checkBoxEl.id = checkboxId;
     checkBoxEl.checked = false;

     checkBoxEl.onclick = function(){
        //console.log("checkbox  function is running");
        onTodoStatusChange(titleId,checkboxId);
        
     }
     listContEl.appendChild(checkBoxEl);

     //label
     let LabelEl = document.createElement("label")
     LabelEl.classList.add("label-cont");
     LabelEl.htmlFor = checkboxId;
     listContEl.appendChild(LabelEl);
 
     //title


     let titleEl = document.createElement("h5");
     titleEl.textContent = todo.title;
     titleEl.id = titleId;
     LabelEl.appendChild(titleEl);
     
     //delete button
     let deleteBtnEl = document.createElement("button");
     deleteBtnEl.classList.add("delete-btn");
     LabelEl.appendChild(deleteBtnEl)

     deleteBtnEl.onclick = function(){
        onTodoDelete(todoId);
     }

     //icon
     
//<i class="fa-solid fa-trash"></i>

  let deleteIconEl = document.createElement("i");
  deleteIconEl.classList.add("fa-solid","fa-trash");
  deleteBtnEl.appendChild(deleteIconEl);

}

for(let todo of todoList){
    //console.log(todo.title);
    createAndAppendTodo(todo);
    
}


//loop ke andar array jayengi ya string jayeg