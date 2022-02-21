const { getCourse, getCourses, createCourse, updateCourse, deleteCourse } = require('../controllers/course');
const router= require('express').Router();

//find all coursess
router.get('/', getCourses);

//find one course
router.get('/:id', getCourse);

//create course
router.post('/', createCourse);

//update course
router.put('/:id', updateCourse);

//delete course
router.delete('/:id', deleteCourse);

module.exports = router;
