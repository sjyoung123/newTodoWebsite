const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const todoSpan = document.querySelector(".todo__span");

const TODOS_KEY = "todos";

let toDos = [];

function handleTodoSpan(){
    const todoNum = todoList.childElementCount;
    if(todoNum===0){
        todoSpan.innerText = ""
    }else if(todoNum===1){
        todoSpan.innerText = `There's one thing left to do.`;
    }else{
        todoSpan.innerText = `I have ${todoNum} more things to do.`;
    }
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deletTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveTodos();
    handleTodoSpan();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;    
    const icon = document.createElement("i");
    icon.setAttribute("class","fas fa-backspace");   
    icon.addEventListener("click",deletTodo);
    li.appendChild(span);
    li.appendChild(icon);
    todoList.appendChild(li);
    handleTodoSpan();
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}
todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}