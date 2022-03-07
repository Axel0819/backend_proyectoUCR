import { getCourseLearnings, createLearning, updateLearning, deleteLearning } from '../controllers/courseLearning.js';
import { Router } from 'express';

const router = Router();

//find all course learnings by course id
router.get('/:id', getCourseLearnings);

//create course learning
router.post('/', createLearning);

//update course learning
router.put('/:id', updateLearning);

//delete course learning
router.delete('/:id', deleteLearning);

export default router;



