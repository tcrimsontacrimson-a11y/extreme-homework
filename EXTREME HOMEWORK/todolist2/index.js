var input=document.getElementById("taskInput");
var list=document.getElementById('taskList');
function taskButton() {
    if(input.value === ''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value +`<button class="delete-btn" onclick="deleteTask(this)">❌</button>  `;
        list.appendChild(li); 
countTasks();
    }
    input.value="";
}

function countTasks() {
    document.getElementById('taskCount').innerText=`Total tasks:${list.children.length}`;
}

function deleteTask(btn) {
    btn.parentElement.remove();
    countTasks();
}