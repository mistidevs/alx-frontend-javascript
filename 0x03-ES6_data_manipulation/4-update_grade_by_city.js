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
    const newGrade = newGrades.find(grade => grade.studentId === student.id);

    if (newGrade) {
      student.grade = newGrade.grade;
    } else {
      student.grade = 'N/A';
    }

    return student;
  });

  return studentsGrades;
}
