import { getEnrolledStudents, getEnrolledStudent, createEnrolledStudent, updateEnrolledStudent, deleteEnrolledStudent } from '../controllers/enrolledStudent.js';
import { Router } from 'express';

const router = Router();

//find all enrolled students
router.get('/allCourseStudents', getEnrolledStudents);

//find one enrolled student
router.get('/courseStudent', getEnrolledStudent);

//create enrolled student
router.post('/', createEnrolledStudent);

router.route('/:id').put(updateEnrolledStudent).delete(deleteEnrolledStudent);

export default router;