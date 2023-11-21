
const readDatabase = require('../utils');

class StudentController {

    static COURSES = {
        CS: 'CS',
        SWE: 'SWE'
    }
    static async getAllStudents(req, res) {
        let resp = 'This is the list of our students\n';
        const cs = [];
        const swe = [];
        try {
            const data = await readDatabase('../database.csv');
            for (const key in data) {
                let row = data[key];
                if (row[row.length - 1].toUpperCase() === StudentController.COURSES.CS) {
                    cs.push(key);
                } else {
                    swe.push(key);
                }
            }

            resp += `Number of students in ${StudentController.COURSES.CS}: ${cs.length}. LIST: ${cs.join(', ')}\n`;
            resp += `Number of students in ${StudentController.COURSES.SWE}: ${swe.length}. LIST: ${swe.join(', ')}`;
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const major = req.params.major;
        let resp = "List:";
        if (major.toUpperCase() in StudentController.COURSES === false) {
            return res.status(500).send('Major parameter must be CS or SWE');
        }
        try {
            const data = await readDatabase('../database.csv');

            for (const key in data) {
                let row = data[key];
                if (row[row.length - 1].toUpperCase() === major.toUpperCase()) {
                    resp += " " + key + ",";
                }
            }
            res.status(200).send(resp.substring(0, resp.length - 1));
        } catch (error) {

            res.status(500).send('Cannot load the database')
        }
    }
}

module.exports = StudentController;