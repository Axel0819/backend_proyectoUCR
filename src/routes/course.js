import { Router } from 'express';
import { getCourse, getCourses, createCourse, updateCourse, deleteCourse } from '../controllers/course.js';
import { fieldsValidate } from '../middlewares/fieldsValidate.js';
import { check } from 'express-validator';


const router = Router();

router.route('/').get(getCourses).post([
    check('idPrice', 'El id de precio es requerido').trim().notEmpty().escape(),
    check('nameCourse', 'El nombre del curso es requerido').trim().notEmpty().escape(),
    check('description', 'La descripción del curso es requerida').trim().notEmpty().escape(),
    check('totalHours', 'Las horas del curso son requeridas').notEmpty(),
    check('category', 'La categoría del curso es requeridas').trim().notEmpty().escape(),
    fieldsValidate
],createCourse);

router.route('/:idCourse').get(getCourse).put([
    check('idPrice', 'El id de precio es requerido').trim().notEmpty().escape(),
    check('nameCourse', 'El nombre del curso es requerido').trim().notEmpty().escape(),
    check('description', 'La descripción del curso es requerida').trim().notEmpty().escape(),
    check('totalHours', 'Las horas del curso son requeridas').notEmpty(),
    check('category', 'La categoría del curso es requeridas').trim().notEmpty().escape(),
    fieldsValidate
],updateCourse).delete(deleteCourse);

export default router;
