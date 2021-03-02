document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", manageListItems);
});

const form = document.getElementById("create-task-form");
const taskDesc = document.getElementById("new-task-description");

function manageListItems(event) {
  event.preventDefault();
  console.log("Submit was clicked");

  // creating a new list item

  const tasks = document.getElementById('tasks');
  const newTask = document.createElement('li');
  console.log(taskDesc.value);
  newTask.textContent = taskDesc.value;
  tasks.appendChild(newTask);
  form.reset();

}

    
