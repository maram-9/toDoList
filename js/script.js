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

        const render = () => {
            let htmlString = "";

            for (const task of tasks) {
                htmlString += `
                <li>
                ${task.content}
                </li>
                `;
            }
            
            document.querySelector(".js-tasks").innerHTML = htmlString;
        };

        const init = () => {
            render();
        };

        init();
}