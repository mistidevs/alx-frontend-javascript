export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  static isArrayofStrings(value) {
    if (!Array.isArray(value)) {
      return false;
    }

    for (const i of value.length) {
      if (typeof value[i] !== 'string') {
        return false;
      }
    }

    return true;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if (newName instanceof String) {
      this._name = newName;
    }
  }

  set length(newLength) {
    if (newLength instanceof Number) {
      this._length = newLength;
    }
  }

  set students(newStudents) {
    if (HolbertonCourse.isArrayofStrings(newStudents) === true) {
      this._students = newStudents;
    }
  }
}
