import { getEnrolledStudents, getEnrolledStudent, createEnrolledStudent, updateEnrolledStudent, deleteEnrolledStudent } from '../controllers/enrolledStudent.js';
import { Router } from 'express';

const router = Router();

//find all enrolled students
router.get('/', getEnrolledStudents);

//find one enrolled student
router.get('/:id', getEnrolledStudent);

//create enrolled student
router.post('/', createEnrolledStudent);

//update enrolled student
router.put('/:id', updateEnrolledStudent);

//delete enrolled student
router.delete('/:id', deleteEnrolledStudent);

export default router;