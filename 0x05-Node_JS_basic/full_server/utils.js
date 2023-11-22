const fs = require('fs');

function readDatabase(filePath) {
  const objData = {};

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(new Error('Cannot read from databse'));
      }

      data.split('\r\n').forEach((dt, idx) => {
        if (dt !== '' && idx !== 0) {
          const row = dt.split(',');
          objData[row[0]] = row;
        }
      });
      return resolve(objData);
    });
  });
}

module.exports = readDatabase;
