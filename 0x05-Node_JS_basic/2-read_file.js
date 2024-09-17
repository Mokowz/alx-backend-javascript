const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const result = [];
    data.split('\n').forEach((data) => {
      result.push(data.split(','));
    });
    result.shift();

    const newStud = [];
    result.forEach((data) => newStud.push([data[0], data[3]]));

    const fields = new Set();
    newStud.forEach((item) => fields.add(item[1]));

    const last = {};
    fields.forEach((data) => { (last[data] = 0); });
    newStud.forEach((data) => { (last[data[1]] += 1); });
    console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);
    Object.keys(last).forEach((data) => console.log(`Number of students in ${data}: ${last[data]}. List: ${newStud.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
  } catch (E) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
