import { Router } from 'express';
import { check } from 'express-validator';
import { fieldsValidate } from '../middlewares/fieldsValidate.js';
import { getStudentsByPromotion, getStudentsByCourse, createEnrolledStudent, updateEnrolledStudent, deleteEnrolledStudent, } from '../controllers/enrolledStudent.js';
import { autocompleteStudentData } from '../controllers/electoralList.js';

const router = Router();

router.get('/promotionStudents/:id',getStudentsByPromotion);

router.get('/courseStudents/:id',getStudentsByCourse);

router.get('/autocompleteStudentData/:id',autocompleteStudentData);

router.post('/', [
    check('idNumber', 'El id del estudiante es requerido').trim().notEmpty().escape(),
    check('identificationType', 'El tipo de identificación es requerido').trim().notEmpty().escape(),
    check('idPromotionCourse', 'El id del curso es requerido').trim().notEmpty().escape(),
    check('idPromotion', 'El id de la promoción es requerido').trim().notEmpty().escape(),
    check('nameStudent', 'El nombre del estudiante es requerido').trim().notEmpty().escape(),
    check('firstSurname', 'El primer apellido del estudiante es requerido').trim().notEmpty().escape(),
    check('secondSurname', 'El segundo apellido del estudiante es requerido').trim().notEmpty().escape(),
    check('email', 'No es un correo válido').trim().isEmail().normalizeEmail(),
    check('phone', 'El teléfono del estudiante es requerido').trim().notEmpty().escape(),
    fieldsValidate
],createEnrolledStudent);

router.route('/:id').put([
    check('idNumber', 'El id del estudiante es requerido').trim().notEmpty().escape(),
    check('identificationType', 'El tipo de identificación es requerido').trim().notEmpty().escape(),
    check('nameStudent', 'El nombre del estudiante es requerido').trim().notEmpty().escape(),
    check('firstSurname', 'El primer apellido del estudiante es requerido').trim().notEmpty().escape(),
    check('secondSurname', 'El segundo apellido del estudiante es requerido').trim().notEmpty().escape(),
    check('email', 'No es un correo válido').trim().isEmail().normalizeEmail(),
    check('phone', 'El teléfono del estudiante es requerido').trim().notEmpty().escape(),
    fieldsValidate
],updateEnrolledStudent).delete(deleteEnrolledStudent);

export default router;