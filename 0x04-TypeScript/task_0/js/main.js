var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "New York",
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    location: "Los Angeles",
};
var studentsList = [student1, student2];
var table = document.createElement("table");
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    var locationCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
document.body.appendChild(table);
