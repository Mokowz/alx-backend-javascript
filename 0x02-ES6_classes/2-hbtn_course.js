/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Name
  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') { throw new TypeError('Name must be a string'); }
    this._name = val;
  }

  // Length
  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') { throw new TypeError('LEngth must be a number'); }
    this._length = val;
  }

  // students
  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val)) { throw new TypeError('Students must be an array'); }
    for (let i = 0; i < val.length; i++) {
      if (typeof val[i] !== 'string') { throw new TypeError('Students must be an array of strings'); }
    }
    this._students = val;
  }
}
