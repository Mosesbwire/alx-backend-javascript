const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      const newdata = data.split('\r\n');
      let total = 0;
      const courses = {
        CS: 'CS',
        SWE: 'SWE',
      };
      const csStudents = [];
      const sweStudents = [];
      newdata.forEach((dt, idx) => {
        if (idx !== 0 && dt !== '') {
          const tmpData = dt.split(',');
          // eslint-disable-next-line no-unused-expressions, max-len
          tmpData[tmpData.length - 1] === courses.CS ? csStudents.push(tmpData[0]) : sweStudents.push(tmpData[0]);
          total += 1;
        }
      });
      resolve(`This is the list of our students\nNumber of students ${total}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    countStudents('database.csv').then((data) => {
      res.end(data);
    });
  }
});

app.listen(1245);

module.exports = app;
