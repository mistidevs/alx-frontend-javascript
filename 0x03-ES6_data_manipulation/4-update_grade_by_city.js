export default function getListStudentIds(students, location, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  if (!students.every(student => typeof student === 'object')) {
    return [];
  }

  if (!students.every(student => student.hasOwnProperty('id'))) {
    return [];
  }

  const studentsLoc = students.filter(student => student.location === location);
  const studentsGrades = studentsLoc.map(student => {
    if (newGrades.studentId === student.id) {
      student.grade = newGrades.grade;
    }

    return student;
  });

  studentsGrades.forEach(student => {
    if (student.grade === undefined) {
      student.grade = 'N/A';
    }
  });

  return studentsGrades;
}
