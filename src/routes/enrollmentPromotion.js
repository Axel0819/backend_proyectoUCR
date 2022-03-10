import { getEnrollmentPromotions, getEnrollmentPromotion, createEnrollmentPromotion, updateEnrollmentPromotion, deleteEnrollmentPromotion} from "../controllers/enrollmentPromotion.js";
import { Router } from 'express';
import { fieldsValidate } from '../middlewares/fieldsValidate.js';
import { check } from 'express-validator';

const router = Router();

router.route('/').get(getEnrollmentPromotions).post([
    check('ID_Course', 'El id del curso es requerido').trim().notEmpty().escape(),
    check('namePromotion', 'El nombre de la promoción es requerido').trim().notEmpty().escape(),
    check('startDate', 'La fecha de inicio es requerida').trim().notEmpty(),
    check('endDate', 'La fecha de fin es requerida').trim().notEmpty(),
    check('startTime', 'La hora de inicio es requerida').trim().notEmpty(),
    check('endTime', 'La hora de fin es requerida').trim().notEmpty(),
    fieldsValidate
],createEnrollmentPromotion);

router.route('/:id', [
    check('id', 'El id de la promoción es requerido').trim().notEmpty().escape(),
    fieldsValidate
]).get(getEnrollmentPromotion).put(updateEnrollmentPromotion).delete(deleteEnrollmentPromotion);

export default router;