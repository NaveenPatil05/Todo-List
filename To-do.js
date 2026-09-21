const todoList=[]
function isit(){
    let totalhtml='';
    todoList.forEach(function(todoobject,index){
        const {name ,duedate}=todoobject
         let html=`<div class="todo">${name}</div>
              <div class="date">${duedate}</div>
              <button class="delete js-delete">Delete</button>`;
        totalhtml+=html;
    });
    document.querySelector(".js-div").innerHTML=totalhtml;
    document.querySelectorAll('.js-delete').forEach((deletebutton,index) => {
        deletebutton.addEventListener('click',() => {
            todoList.splice(index,1);
            isit();
        })     
    })
};
function addtodo(){
   let name=document.querySelector('.js-todo').value;
   let duedate=document.querySelector('.js-date').value;
   if (!name || !duedate){
    return;
   }
   todoList.push({name:name,duedate:duedate
   });
   document.querySelector('.js-todo').value='';
   document.querySelector('.js-date').value='';
   isit();
};
document.querySelector('.js-addbutton').addEventListener('click' , () => addtodo());
