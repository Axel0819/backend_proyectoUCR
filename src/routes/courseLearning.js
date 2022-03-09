import { getAllLearnings, getCourseLearnings, createLearning, updateLearning, deleteLearning } from '../controllers/courseLearning.js';
import { Router } from 'express';

const router = Router();

router.route('/').get(getAllLearnings).post(createLearning);

router.get('/:idCourse', getCourseLearnings);

router.route('/:idLearning').put(updateLearning).delete(deleteLearning);

export default router;



