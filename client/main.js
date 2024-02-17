//front end where requests are made to the back end then executed
const allBtn = document.getElementById("allTasksButton");
const taskList = document.getElementById("listOfToDos");
const addForm = document.getElementById("add-to-list");

const baseURL = "http://localhost:4545/api/getToDos";

// Handler for submit task form
// START OF HIGHLIGHTED CODE

function submitHandlerForAdd(evt) {
  evt.preventDefault();

  //call the submit button id
  const newToDoInput = document.getElementById("inputForNewTask");

  let theToDo = newToDoInput.value;

  let bodyObject = {
    task: theToDo,
  };

  addMyToDo(bodyObject);

  alert("Just added a new ToDo!");
  newToDoInput.value = "";
}

//function for getting data to front end

const getMyToDos = () => {
  axios.get(`http://localhost:4545/api/getToDos`).then((res) => {
    // this is an array of objects
    const tasksObj = res.data;

    //make sure the list isn't printed twice if user clicks on it again
    taskList.innerHTML = "";

    if (tasksObj.length === 0) {
      alert("You don't have any To Do's at the moment!");
    } else {
      tasksObj.forEach((obj) => {
        // for each obj create an h2 element and set it to the content
        const h2Element = document.createElement("h2");
        h2Element.textContent = obj.task;
        //call the parent which was our div called taskList
        taskList.appendChild(h2Element);
      });
    }
  });
};

// function for posting data to front end
const addMyToDo = (taskObject) => {
  axios.post(`${baseURL}`, taskObject).then((res) => {
    getMyToDos();
  });
};

// END OF HIGHLIGHTED CODE

allBtn.addEventListener("click", getMyToDos);
addForm.addEventListener("submit", submitHandlerForAdd);
