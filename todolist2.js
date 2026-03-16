const text = document.querySelector(".text");
const list = document.querySelector(".list");
const btn = document.querySelector(".btn");
const Delete = document.querySelector(".delete")
const checkall = document.querySelector('.checkall')

function NewTask() {
    if (text.value === "") {
        return;
    }
    const task = document.createElement("li");
    task.innerHTML = `
        <input type="checkbox" class="check">
        <label>${text.value}</label>
        <button class="trash">🗑️</button>
    `

    const trash = task.querySelector(".trash");
    const check = task.querySelector(".check");

    trash.addEventListener("click", function () {
        task.remove();
    });
    Delete.addEventListener("click", function () {
        task.remove()

    }
    )
    checkall.addEventListener('change', function () {
        check.checked=checkall.checked
        
        if(checkall.checked)
        task.style.textDecoration = "line-through";
        else{
            task.style.textDecoration = "none";
        }
    });



    check.addEventListener("change", function () {
        if (check.checked) {
            task.style.textDecoration = "line-through";
            task.style.color = "#999";
            list.append(task);
        } else {
            task.style.textDecoration = "none";
            task.style.color = "";
            list.prepend(task);
        }
    });

    list.append(task);
    text.value = "";
}

btn.addEventListener("click", NewTask);

text.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        NewTask();
    }
});
