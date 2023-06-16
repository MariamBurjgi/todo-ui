const tasks_endpoint = "http://127.0.0.1:8000/tasks/";

async function fetchTasks() {
    const response = await fetch(tasks_endpoint);
    const tasks = await response.json();

    return tasks;
}

function renderTakTemplate(task) {
    `<li>
        <div>
           <h1> ${task.title} </h1>
           <p> ${task.description} </p>
           <button> ${tasl.completed ? "Undone" : "Done"} </button>
        </div>
  
    </li>`;  

}

async function main() {
    const tasks = await fetchTasks();
   
    let taskListString = "";
   for (let task of tasks) {
        let renderedTaskTemplateString = renderTaskTemplate(task);
        taskListString += (renderedTaskTemplateString);
   }
  document.getElementById('taskList').innerHTML =taskListString;
}

main();
