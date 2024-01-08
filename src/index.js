document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      buildToDo(e.target.new_task_description.value) //target grabs a specific input new_todo and its value after submision
      form.reset();
  });
    
  function buildToDo (task, user, duration, dueDate,){
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.addEventListener('click', handleDelete);
    btn.textContent = 'x';
    li.textContent = `${task}, User: ${user}, Duration: ${duration}, Due Date: ${dueDate}`;
    li.appendChild(btn);
    document.querySelector('#tasks').appendChild(li)
  }
  function handleDelete (e){
    e.target.parentNode.remove()
    }
  });
