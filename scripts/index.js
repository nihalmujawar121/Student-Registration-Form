let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");

let button = document.querySelector("#register-button");
let tableBody = document.querySelector("#tbody");

var studentArray = [];
var flag = "create";
var tempID;

button.addEventListener("click", (event) => {
  if (flag === "create") {
    let studentObject = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      mobile: mobile.value,
    };

    if (
      firstName.value == "" ||
      lastName.value == "" ||
      email.value == "" ||
      mobile.value == ""
    ) {
      return;
    }
    studentArray.push(studentObject);
    displayStudentDetails();
    clearText();

    storeInJson();
  } else {
    updateStudent(tempID);
    displayStudentDetails();
    clearText();
    button.innerHTML = "Register";
    flag = "create";
  }
  event.preventDefault();
});

function displayStudentDetails() {
  let table = "";
  for (let i = 0; i < studentArray.length; i++) {
    table += `
    <tr>
    <th scope ="row">${i}</th>
    <td>${studentArray[i].firstName}</td>
    <td>${studentArray[i].lastName}</td>
    <td>${studentArray[i].email}</td>
    <td>${studentArray[i].mobile}</td>
    <td>
    <button class="btn btn-success" onclick = "editStudent(${i})">Edit </button>
    <button class="btn btn-primary" onclick = "deleteStudent(${i})">Delete </button>
    </td>
    </tr>
    `;
    // document.getElementById("tbody").innerHTML = table;
    tableBody.innerHTML = table;
  }
}

function deleteStudent(id) {
  studentArray.splice(id, 1);
  displayStudentDetails();
}

function clearText() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  mobile.value = "";
}

function editStudent(id) {
  tempID = id;
  flag = "update";
  button.innerHTML = "Update";

  firstName.value = studentArray[id].firstName;
  lastName.value = studentArray[id].lastName;
  email.value = studentArray[id].email;
  mobile.value = studentArray[id].mobile;
}

function updateStudent(id) {
  studentArray[id] = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    mobile: mobile.value,
  };
}
displayStudentDetails();

function storeInJson() {
  fetch("http://localhost:3000/student", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentObject),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
