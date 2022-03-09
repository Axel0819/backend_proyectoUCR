import { getPromotionCourses, createPromotionCourse, updatePromotionCourse, deletePromotionCourse} from '../controllers/promotionCourses.js';
import { Router } from 'express';

const router = Router();

router.route('/:id').get(getPromotionCourses).delete(deletePromotionCourse);

router.route('/').put(createPromotionCourse).post(updatePromotionCourse);


export default router;