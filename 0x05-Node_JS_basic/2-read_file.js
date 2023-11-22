const fs = require('fs');

module.exports = function countStudents(file) {
  try {
    const buf = fs.readFileSync(file, { encoding: 'utf-8' });
    const data = buf.split('\r\n');
    let total = 0;
    const courses = {
      CS: 'CS',
      SWE: 'SWE',
    };
    const csStudents = [];
    const sweStudents = [];
    data.forEach((dt, idx) => {
      if (idx !== 0 && dt !== '') {
        const tmpData = dt.split(',');
        // eslint-disable-next-line no-unused-expressions, max-len
        tmpData[tmpData.length - 1] === courses.CS ? csStudents.push(tmpData[0]) : sweStudents.push(tmpData[0]);
        total += 1;
      }
    });
    console.log(`Number of students: ${total}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
