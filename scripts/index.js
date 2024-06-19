let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");

let button = document.querySelector("#register-button");
let tableBody = document.querySelector("#tbody");

var studentArray = [];
var flag = "create";
var tempID;
button.addEventListener("click", () => {});

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
    `;
  }
}

function deleteStudent(id) {
  studentArray.splice(id, 1);
  displayStudentDetails();
}

function updateStudent(id) {}
