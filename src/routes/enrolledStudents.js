import { getEnrolledStudents, getEnrolledStudent, createEnrolledStudent, updateEnrolledStudent, deleteEnrolledStudent } from '../controllers/enrolledStudent.js';
import { Router } from 'express';
import { fieldsValidate } from '../middlewares/fieldsValidate.js';
import { check } from 'express-validator';

const router = Router();

//find all enrolled students
router.get('/allCourseStudents', [
    check('ID_Course', 'El id del curso es requerido').trim().notEmpty().escape(),
    check('id_promotion', 'El id de la promoción es requerido').trim().notEmpty().escape(),
    fieldsValidate
],getEnrolledStudents);

//find one enrolled student
router.get('/courseStudent', [
    check('ID_Student', 'El id del estudiante es requerido').trim().notEmpty().escape(),
    check('ID_Course', 'El id del curso es requerido').trim().notEmpty().escape(),
    check('id_promotion', 'El id de la promoción es requerido').trim().notEmpty().escape(),
    fieldsValidate
],getEnrolledStudent);

//create enrolled student
router.post('/', [
    check('ID_Student', 'El id del estudiante es requerido').trim().notEmpty().escape(),
    check('ID_Course', 'El id del curso es requerido').trim().notEmpty().escape(),
    check('id_promotion', 'El id de la promoción es requerido').trim().notEmpty().escape(),
    check('nameStudent', 'El nombre del estudiante es requerido').trim().notEmpty().escape(),
    check('firstSurname', 'El primer apellido del estudiante es requerido').trim().notEmpty().escape(),
    check('secondSurname', 'El segundo apellido del estudiante es requerido').trim().notEmpty().escape(),
    check('email', 'El correo del estudiante es requerido').trim().isEmail().normalizeEmail(),
    check('phone', 'El teléfono del estudiante es requerido').trim().notEmpty().escape(),
    fieldsValidate
],createEnrolledStudent);

router.route('/:id').put([
    check('id', 'El id del estudiante es requerido').trim().notEmpty().escape(),
    fieldsValidate
],updateEnrolledStudent).delete([
    check('ID_Student', 'El id del estudiante es requerido').trim().notEmpty().escape(),
    check('ID_Course', 'El id del curso es requerido').trim().notEmpty().escape(),
    check('id_promotion', 'El id de la promoción es requerido').trim().notEmpty().escape(),
    fieldsValidate
],deleteEnrolledStudent);

export default router;