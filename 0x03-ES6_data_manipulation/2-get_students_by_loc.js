export default function getListStudentIds(students, location) {
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

  return studentsLoc;
}
