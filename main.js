const todos = [
    {
        id: 0,
        title: "kitob o'qish",
        created: "02.08.2023",
        isDone: true,
    },
    {
        id: 1,
        title: "kitob o'qish",
        created: "05.08.2023",
        isDone: false,
    },
    {
        id: 2,
        title: "kitob o'qish",
        created: "05.08.2023",
        isDone: false,
    },
];

const elInputName = document.querySelector(".input-name");
const elInputDate = document.querySelector(".input-date");
const elForm = document.querySelector("#form");
const elCards = document.querySelector(".cards");

function renderTodos(array, parent) {
    for (let i = 0; i < array.length; i++) {
        const newCard = document.createElement("div");
        newCard.className = "card p-3 mt-3";
        newCard.innerHTML = `
        <div class="card-title  text-decoration-line-through">${array[i].title}</div>
        <p> ${array[i].created}</p>
        
        `;

        parent.appendChild(newCard);
    }
}

renderTodos(todos, elCards);

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (elInputName.value !== "") {
        elCards.innerHTML = "";

        const newTodo = {
            id: todos.length,
            title: elInputName.value,
            created: elInputDate.value,
            isDone: false,
        };
        todos.push(newTodo);

        renderTodos(todos, elCards);

        elForm.reset();
    } else {
        alert("Error");
    }
});
