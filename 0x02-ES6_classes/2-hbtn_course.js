export default class HolbertonCourse {
constructor(name, length, students) {
  this._name = this._verifyString(name, 'Name');
  this._length = this._verifyNumber(length, 'Length');
  this._students = this._verifyArrayOfStrings(students, 'Students');
}

get name() {
  return this._name;
}

set name(newName) {
  this._name = this._verifyString(newName, 'Name');
}

get length() {
  return this._length;
}

set length(newLength) {
  this._length = this._verifyNumber(newLength, 'Length');
}

get students() {
  return this._students;
}

set students(newStudents) {
  this._students = this._verifyArrayOfStrings(newStudents, 'Students');
}

_verifyString(value, propName) {
  if (typeof value !== 'string') {
    throw new TypeError(`${propName} must be a string`);
  }
  return value;
}

_verifyNumber(value, propName) {
  if (typeof value !== 'number') {
    throw new TypeError(`${propName} must be a number`);
  }
  return value;
}

_verifyArrayOfStrings(value, propName) {
  if (!Array.isArray(value) || value.some(item => typeof item !== 'string')) {
    throw new TypeError(`${propName} must be an array of strings`);
  }
  return value;
}
}
