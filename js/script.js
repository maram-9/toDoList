{
    const welcome = () => {
        console.log("Hello, nice to see you!");
    };

        const tasks = [
            {
                content: "test",
                done: true,
            },
            {
                content: "test",
                done: false, 
        },
        ];

        const addNewTask = (newTaskContent) => {
          tasks.push({
            content: newTaskContent,
          });

          render();
        };

        const removeTask = (taskIndex) => {
          tasks.splice(taskIndex, 1);
                render();
        }

        const render = () => {
            let htmlString = "";

            for (const task of tasks) {
                htmlString += `
                <li class= "list">
                <button class= "list__button list__button--done js-done">
                ${task.done ? "✔" : ""}
                </button>
                <span class="list__taskName${task.done ? " list__taskName--done" : ""}">
                ${task.content}
                </span>
                <button class="list__button js-remove">
                🗑
                </button>
                </li>
                `;
            };
            
            document.querySelector(".js-tasks").innerHTML = htmlString;

            const removeButtons = document.querySelectorAll (".js-remove");
           
            removeButtons.forEach((removeButton, index) => {
              removeButton.addEventListener("click", () => {
                removeTask(index);
            });
          });
        };

        const onFormSubmit = (event) => {
            event.preventDefault();
            
            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            
            if (newTaskContent === "") {
              return;
            }

            addNewTask(newTaskContent);
        };

        const init = () => {
            render();

            const form = document.querySelector(".js-form");

            form.addEventListener("submit", onFormSubmit);
        };

        init();
}