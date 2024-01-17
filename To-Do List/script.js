const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        //creating a html element with the tag name "li"
        let li = document.createElement("li");
        //Assigning text to add inside the "li" variable
        li.innerHTML = inputBox.value;
        //Where to display the variable "li"
        //Will be displayed inside the list container
        listContainer.appendChild(li);
        //Adding one cross icon in the span tag
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        //Displaying the span tag
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//Writing a function for storage persistence of my lists
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//Function to retrieve data everytime we load/launch the webpage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
//Call the function
showTask();