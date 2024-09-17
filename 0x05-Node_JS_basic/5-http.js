const http = require('http');
const fs = require('fs');
const { argv } = require('process');

function countStudents(path, stream) {
  if (fs.existsSync(path)) {
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
    stream.write(`Number of students: ${result.length}\n`);
    const temp = [];
    Object.keys(last).forEach((data) => temp.push(`Number of students in ${data}: ${last[data]}. List: ${newStud.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`));
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < temp.length; i++) {
      if (i === temp.length - 1) {
        temp[i] = temp[i].replace(/(\r\n|\n|\r)/gm, '');
      }
      stream.write(temp[i]);
    }
  } else { throw new Error('Cannot load the database'); }
}

const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(argv[2], res);
      res.end();
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(port, host);

module.exports = app;
