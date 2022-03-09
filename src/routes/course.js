import { Router } from 'express';
import { getCourse, getCourses, createCourse, updateCourse, deleteCourse } from '../controllers/course.js';


const router = Router();

router.route('/').get(getCourses).post(createCourse);
router.route('/:OMIModel').get(getCourse).put(updateCourse).delete(deleteCourse);

export default router;
