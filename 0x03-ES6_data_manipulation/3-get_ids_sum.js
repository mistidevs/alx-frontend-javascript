export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  if (!students.every((student) => typeof student === 'object')) {
    return [];
  }

  const studentIdsSum = students.reduce((accumulator, student) => accumulator + student.id, 0);

  return studentIdsSum;
}
