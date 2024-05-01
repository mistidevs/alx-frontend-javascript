interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const first: Student = { firstName: 'Misati', lastName:'Nyambane', age: 19, location: 'Nairobi'};
const second: Student = { firstName: 'Ogechi', lastName:'Nyambane', age: 18, location: 'Nairobi'};

const studentsList: Student[] = [first, second];

function renderTable(students: Student[]) {
  const tableBody = document.getElementById('tableBody');
  if (!tableBody) return;

  students.forEach(student => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });
}

renderTable(studentsList);