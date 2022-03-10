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

router.get('/:idCourse', [
    check('idCourse', 'El id del curso es requerido').trim().notEmpty().escape(),
    fieldsValidate
],getCourseLearnings);

router.route('/:idLearning',[
    check('idLearning', 'El id del aprendizaje es requerido').trim().notEmpty().escape(),
    fieldsValidate
]).put(updateLearning).delete(deleteLearning);

export default router;



