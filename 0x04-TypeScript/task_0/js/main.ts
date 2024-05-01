interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const first: Student = { firstName: 'Misati', lastName:'Nyambane', age: 19, location: 'Nairobi'};
const second: Student = { firstName: 'Ogechi', lastName:'Nyambane', age: 18, location: 'Nairobi'};

const studentsList: Student[] = [first, second];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "blue";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid pink";
  locationCell.style.border = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);
