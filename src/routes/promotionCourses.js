import { getPromotionCourses, createPromotionCourse, updatePromotionCourse, deletePromotionCourse} from '../controllers/promotionCourses.js';
import { Router } from 'express';
import { check } from 'express-validator';
import { fieldsValidate } from '../middlewares/fieldsValidate.js';

const router = Router();

router.route('/:id').get([
    check('id', 'El id de la promoción es requerido').notEmpty(),
    fieldsValidate
],getPromotionCourses).delete([
    check('id', 'El id del curso es requerido').notEmpty(),
    fieldsValidate
],deletePromotionCourse);

router.put('/:id', [
    check('idCourse', 'El id del curso es requerido').notEmpty(),
    fieldsValidate
], updatePromotionCourse);

router.post('/', [
    check('idCourse', 'El id del curso es requerido').notEmpty(),
    check('idPromotion', 'El id de la promoción es requerido').notEmpty(),
    check('quotas', 'La cantidad de cupos es requerida').notEmpty(),
    fieldsValidate
],createPromotionCourse);


export default router;