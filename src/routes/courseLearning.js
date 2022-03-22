import { getAllLearnings, getCourseLearnings, createLearning, updateLearning, deleteLearning } from '../controllers/courseLearning.js';
import { Router } from 'express';
import { fieldsValidate } from '../middlewares/fieldsValidate.js';
import { check } from 'express-validator';

const router = Router();

router.route('/').get(getAllLearnings).post([
    check('idCourse', 'El id del curso es requerido').trim().notEmpty().escape(),
    check('description', 'La descripción es requerida').trim().notEmpty().escape(),
    fieldsValidate
],createLearning);

router.get('/:idCourse',getCourseLearnings);

router.route('/:idLearning').put([
    check('description', 'La descripción es requerida').trim().notEmpty().escape(),
    fieldsValidate
],updateLearning).delete(deleteLearning);

export default router;



