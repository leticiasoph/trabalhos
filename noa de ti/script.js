 const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

let tasks = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    input.value = "";

    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = task.text;

        span.addEventListener("click", function () {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        const button = document.createElement("button");
        button.textContent = "Remover";
        button.classList.add("remove");

        button.addEventListener("click", function () {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li);
    });

    const pending = tasks.filter(task => !task.completed).length;

    counter.textContent =
        `${pending} ${pending === 1 ? "tarefa pendente" : "tarefas pendentes"}`;
}
