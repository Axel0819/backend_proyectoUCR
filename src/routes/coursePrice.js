import { Router } from "express";
import { fieldsValidate } from '../middlewares/fieldsValidate.js';
import { check } from 'express-validator';
import { getAllCoursePrice, getCoursePriceById, createCoursePrice, updateCoursePrice, deleteCoursePrice } from '../controllers/coursePrice.js';

const router = Router();

router.route('/').get(getAllCoursePrice).post([
    check('nationalPrice', 'El precio nacional es requerido').trim().notEmpty(),
    check('nationalRenewalPrice', 'El precio de renovación nacional es requerido').trim().notEmpty(),
    check('internationalPrice', 'El precio internacional es requerido').trim().notEmpty(),
    check('internationalRenewalPrice', 'El precio de renovación internacional es requerido').trim().notEmpty(),
    fieldsValidate
],createCoursePrice);

router.route('/:idPrice').get(getCoursePriceById).put([
    check('nationalPrice', 'El precio nacional es requerido').trim().notEmpty(),
    check('nationalRenewalPrice', 'El precio de renovación nacional es requerido').trim().notEmpty(),
    check('internationalPrice', 'El precio internacional es requerido').trim().notEmpty(),
    check('internationalRenewalPrice', 'El precio de renovación internacional es requerido').trim().notEmpty(),
    fieldsValidate
],updateCoursePrice).delete(deleteCoursePrice);

export default router;