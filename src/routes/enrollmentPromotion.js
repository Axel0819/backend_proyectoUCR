import { getEnrollmentPromotions, getEnrollmentPromotion, createEnrollmentPromotion, updateEnrollmentPromotion, deleteEnrollmentPromotion} from "../controllers/enrollmentPromotion.js";
import { Router } from 'express';
import { fieldsValidate } from '../middlewares/fieldsValidate.js';
import { check } from 'express-validator';

const router = Router();

router.route('/').get(getEnrollmentPromotions).post([
    check('namePromotion', 'El nombre de la promoción es requerido').trim().notEmpty().escape(),
    check('startDate', 'La fecha de inicio es requerida').trim().notEmpty(),
    check('endDate', 'La fecha de fin es requerida').trim().notEmpty(),
    check('startTime', 'La hora de inicio es requerida').trim().notEmpty(),
    check('endTime', 'La hora de fin es requerida').trim().notEmpty(),
    fieldsValidate
],createEnrollmentPromotion);

router.route('/:enrollmentId').get(getEnrollmentPromotion).put([
    check('namePromotion', 'El nombre de la promoción es requerido').trim().notEmpty().escape(),
    check('startDate', 'La fecha de inicio es requerida').trim().notEmpty(),
    check('endDate', 'La fecha de fin es requerida').trim().notEmpty(),
    check('startTime', 'La hora de inicio es requerida').trim().notEmpty(),
    check('endTime', 'La hora de fin es requerida').trim().notEmpty(),
    fieldsValidate
],updateEnrollmentPromotion).delete(deleteEnrollmentPromotion);

export default router;