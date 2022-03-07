import {getAllCoursePrice, getCoursePrice, createCoursePrice, updateCoursePrice, deleteCoursePrice} from '../models/coursePrice.js';
import { Router } from "express";
const router = Router();

router.get("/", getAllCoursePrice);

router.get("/:id", getCoursePrice);

router.post("/", createCoursePrice);

router.put("/:id", updateCoursePrice);

router.delete("/:id", deleteCoursePrice);

export default router;