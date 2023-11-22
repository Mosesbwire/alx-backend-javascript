const express = require('express');

const router = express.Router();
const AppController = require('../controllers/AppController');
const StudentController = require('../controllers/StudentController');

router.get('/', AppController.getHomepage);
router.get('/students', StudentController.getAllStudents);
router.get('/students/:major', StudentController.getAllStudentsByMajor);

module.exports = router;
