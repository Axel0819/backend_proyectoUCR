import { getAllCoursePrice, getCoursePriceById, createCoursePrice, updateCoursePrice, deleteCoursePrice } from '../models/coursePrice.js';
import { Router } from "express";
const router = Router();

router.route('/').get(getAllCoursePrice).post(createCoursePrice);
router.route('/:idPrice').get(getCoursePriceById).put(updateCoursePrice).delete(deleteCoursePrice);

export default router;