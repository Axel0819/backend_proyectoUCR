import { Router } from 'express';
import { getCourse, getCourses, createCourse, updateCourse, deleteCourse } from '../controllers/course.js';
import { fieldsValidate } from '../middlewares/fieldsValidate.js';
import { check } from 'express-validator';


const router = Router();

router.route('/').get(getCourses).post([
    check('OMIModel', 'El id del curso es requerido').trim().notEmpty().escape(),
    check('nameCourse', 'El nombre del curso es requerido').trim().notEmpty().escape(),
    check('schedule', 'El horario del curso es requerido').trim().notEmpty().escape(),
    check('description', 'La descripción del curso es requerida').trim().notEmpty().escape(),
    check('weeklyHours', 'Las horas semanales del curso son requeridas').notEmpty(),
    fieldsValidate
],createCourse);

router.route('/:OMIModel', [
    check('OMIModel', 'El id del curso es requerido').trim().notEmpty().escape(),
    fieldsValidate
]).get(getCourse).put(updateCourse).delete(deleteCourse);

export default router;
