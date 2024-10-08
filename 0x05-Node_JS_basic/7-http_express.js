const express = require('express');
const { argv } = require('process');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
      throw Error('Cannot load the database');
    }
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
    res.write(`Number of students: ${result.filter((check) => check.length > 3).length}\n`);
    Object.keys(last).forEach((data) => res.write(`Number of students in ${data}: ${last[data]}. List: ${newStud.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`));
    res.end();
  });
});

app.listen(1245);

module.exports = app;
