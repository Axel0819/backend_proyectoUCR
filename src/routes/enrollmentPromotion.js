import { getEnrollmentPromotions, getEnrollmentPromotion, createEnrollmentPromotion, updateEnrollmentPromotion, deleteEnrollmentPromotion} from "../controllers/enrollmentPromotion.js";

import { Router } from 'express';
const router = Router();

router.route('/').get(getEnrollmentPromotions).post(createEnrollmentPromotion);

router.route('/:id').get(getEnrollmentPromotion).put(updateEnrollmentPromotion).delete(deleteEnrollmentPromotion);

export default router;