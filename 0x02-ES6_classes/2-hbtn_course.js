/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }

    if (Array.isArray(students) || students.every((item) => typeof item === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(courseName) {
    if (typeof courseName === 'string') {
      this._name = courseName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(courseLength) {
    if (typeof courseLength === 'number') {
      this._length = courseLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(courseStudents) {
    if (Array.isArray(courseStudents) || courseStudents.every((item) => typeof item === 'string')) {
      this._students = courseStudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
