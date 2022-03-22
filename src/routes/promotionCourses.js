import { getPromotionCourses, createPromotionCourse, updatePromotionCourse, deletePromotionCourse} from '../controllers/promotionCourses.js';
import { Router } from 'express';
import { check } from 'express-validator';
import { fieldsValidate } from '../middlewares/fieldsValidate.js';

const router = Router();

router.route('/:id').get(getPromotionCourses).delete(deletePromotionCourse);

router.put('/:id', [
    check('totalQuotas', 'La cantidad de cupos es requerida').trim().notEmpty().escape(),
    check('classDays', 'Laos días/hora de clase son requeridos').trim().notEmpty().escape(),
    check('startDate', 'La fecha de inicio es requerida').trim().notEmpty().escape(),
    check('endDate', 'La fecha de fin es requerida').trim().notEmpty().escape(),
    check('place', 'El lugar es requerido').trim().notEmpty().escape(),
    fieldsValidate
], updatePromotionCourse);

router.post('/', [
    check('idCourse', 'El id del curso es requerido').trim().notEmpty().escape(),
    check('idPromotion', 'El id de la promoción es requerido').trim().notEmpty().escape(),
    check('totalQuotas', 'La cantidad de cupos es requerida').trim().notEmpty().escape(),
    check('classDays', 'Laos días/hora de clase son requeridos').trim().notEmpty().escape(),
    check('startDate', 'La fecha de inicio es requerida').trim().notEmpty().escape(),
    check('endDate', 'La fecha de fin es requerida').trim().notEmpty().escape(),
    check('place', 'El lugar es requerido').trim().notEmpty().escape(),
    fieldsValidate
],createPromotionCourse);


export default router;