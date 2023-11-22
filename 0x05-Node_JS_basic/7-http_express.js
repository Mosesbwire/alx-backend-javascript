const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const data = await countStudents('database.csv');
  if (data) {
    res.send(data);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
