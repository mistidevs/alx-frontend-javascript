export default function getListStudentIds(students, location, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  if (!students.every((student) => typeof student === 'object')) {
    return [];
  }

  const studentsLoc = students.filter((student) => student.location === location);

  const studentsGrades = studentsLoc.map((student) => {
    const single = student;
    const newGrade = newGrades.find((grade) => grade.studentId === single.id);

    if (newGrade) {
      single.grade = newGrade.grade;
    } else {
      single.grade = 'N/A';
    }

    return single;
  });

  return studentsGrades;
}
