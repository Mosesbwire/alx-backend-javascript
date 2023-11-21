const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {

            if (err) {
                return reject(new Error('Cannot read from databse'));
            }

            const students = data.split('\r\n').map((dt, idx) => {
                if (dt !== '' && idx !== 0) {

                    return dt.split(',')[0]
                }
            }).filter(std => std !== undefined);
            return resolve(students);
        });
    });
}

module.exports = readDatabase;