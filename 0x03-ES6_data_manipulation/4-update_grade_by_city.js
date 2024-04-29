export default function getListStudentIds(students, location, newGrades) {
  if (!Array.isArray(students) || Array.isArray(newGrades)) {
    return [];
  }

  if (!students.every(student => typeof student === 'object') || !newGrades.every(grade => typeof grade === 'object')) {
    return [];
  }

  if (!students.every(student => student.hasOwnProperty('id'))) {
    return [];
  }

  const studentsLoc = students.filter(student => student.location === location);
  const studentsGrades = studentsLoc.map(student => {
    if (newGrades.id === student.id) {
      student.grade = newGrades.grade;
    }
  });

  studentsGrades.forEach(student => {
    if (student.grade === undefined) {
      student.grade = 'N/A';
    }
  });

  return studentsGrades;
}
