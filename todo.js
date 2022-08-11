
let Add = document.querySelector("#add");
let title = document.querySelector("#todo-title");
let description = document.querySelector("#todo-description");
let list = document.querySelector("#todo-list");

function sceleton (title, description) {
    return `
    <div id="unit">
            <div class="header-elements">
                <h2 class="todo-title">${title}</h2>
                <input type="checkbox">
            </div>
            <p class="todo-description">${description}</p>
    </div>`;

}

Add.addEventListener("click", () => {
    let todoTitle = title.value;
    let todoDescription = description.value;
    const card = sceleton(todoTitle, todoDescription);

    list.innerHTML += card;
    title.value = "";
    description.value = "";
})


title.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        Add.click();
    }
});
description.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        Add.click();
    }
});