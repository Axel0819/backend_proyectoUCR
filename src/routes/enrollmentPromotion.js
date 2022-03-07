import { getEnrollmentPromotions, getEnrollmentPromotion, createEnrollmentPromotion, updateEnrollmentPromotion, deleteEnrollmentPromotion} from "../controllers/enrollmentPromotion.js";

import { Router } from 'express';
const router = Router();

router.get('/', getEnrollmentPromotions);

router.get('/:enrollmentId', getEnrollmentPromotion);

router.post('/', createEnrollmentPromotion);

router.put('/:enrollmentId', updateEnrollmentPromotion);

router.delete('/:enrollmentId', deleteEnrollmentPromotion);

export default router;