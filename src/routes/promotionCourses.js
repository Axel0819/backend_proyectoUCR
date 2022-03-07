import { getPromotionCourses, createPromotionCourse, updatePromotionCourse, deletePromotionCourse} from '../controllers/promotionCourses.js';
import { Router } from 'express';

const router = Router();

router.get('/:idPromotion', getPromotionCourses);

router.post('/', createPromotionCourse);

router.put('/', updatePromotionCourse);

router.delete('/', deletePromotionCourse);

export default router;