export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  if (!students.every(student => (typeof student === 'object'))) {
    return [];
  }

  const studentIds = students.map(student => (student.id));

  return studentIds;
}
