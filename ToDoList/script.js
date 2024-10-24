let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value


        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        /*
        span.onclick = function () {
            listContainer.removeChild(li);
            saveData();
        }

        li.onclick = function () {
            this.classList.toggle("checked");
            saveData();
        } */

        listContainer.appendChild(li);
        li.appendChild(span);
    }
    inputBox.value = ""
    saveData();
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}


listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//Two ways for displaing the data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayData() {
    listContainer.innerHTML = localStorage.getItem("data")
}

/*function showdata(){
    let data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data;
    } else {
        listContainer.innerHTML = "";
    }
}*/


displayData();
//showdata();