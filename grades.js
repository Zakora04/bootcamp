function addtask() {
  //Get the input field and list elements
  const taskinput = document.getElementById("task");
  const tasklist = document.getElementById("list");
  // check if the input is empty trim white spacing
  if (taskinput.value.trim() === "") return;

  //create a new list item(li) element
  const li = document.createElement("li");
  //set the text content of the li to the  input value
  li.textContent = taskinput.value;
  //add a click event to remove the task when clicked
  li.onclick = function () {
    tasklist.removeChild(li);
  };
  //append the new task to the list
  tasklist.appendChild(li);

  taskinput.value = "";
}
