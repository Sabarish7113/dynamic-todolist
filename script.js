


document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        ${taskText}
        <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(li);

    // Add event listener to the delete button
    li.querySelector('.deleteBtn').addEventListener('click', function() {
        li.remove();
    });

    taskInput.value = '';
}