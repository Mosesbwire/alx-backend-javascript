
interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Moses",
    lastName: "Bwire",
    age: 31,
    location: "Nairobi"
}

const student2: Student = {
    firstName: "Sheila",
    lastName: "Amalemba",
    age: 31,
    location: "Nairobi"
}

const studentList = [student1, student2];


function createElement (tag: string): Node{
    return document.createElement(tag);
}

const table = createElement("table");
const tableHeading = createElement("tr");
const nameHeading = createElement("th");
const locationHeading = createElement("th");

nameHeading.textContent = "Name";
locationHeading.textContent = "Location";

tableHeading.appendChild(nameHeading);
tableHeading.appendChild(locationHeading);

table.appendChild(tableHeading);


studentList.forEach(student =>{
    const tr = createElement("tr");
    const tdName = createElement("td");
    const tdLocation = createElement("td");
    tdName.textContent = student.firstName;
    tdLocation.textContent = student.location;

    tr.appendChild(tdName);
    tr.appendChild(tdLocation);
    table.appendChild(tr);
})

document.body.append(table);

