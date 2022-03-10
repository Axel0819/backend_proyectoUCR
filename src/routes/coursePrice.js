import { getAllCoursePrice, getCoursePriceById, createCoursePrice, updateCoursePrice, deleteCoursePrice } from '../models/coursePrice.js';
import { Router } from "express";
const router = Router();
import { fieldsValidate } from '../middlewares/fieldsValidate.js';
import { check } from 'express-validator';

router.route('/').get(getAllCoursePrice).post([
    check('idCourse', 'El id del curso es requerido').trim().notEmpty().escape(),
    check('nationalPrice', 'El precio nacional es requerido').trim().notEmpty(),
    check('nationalRenewalPrice', 'El precio de renovación nacional es requerido').trim().notEmpty(),
    check('internationalPrice', 'El precio internacional es requerido').trim().notEmpty(),
    check('internationalRenewalPrice', 'El precio de renovación internacional es requerido').trim().notEmpty(),
    fieldsValidate
],createCoursePrice);

router.route('/:idPrice', [
    check('idPrice', 'El id de la tarifa es requerido').trim().notEmpty().escape(),
    fieldsValidate
]).get(getCoursePriceById).put(updateCoursePrice).delete(deleteCoursePrice);

export default router;