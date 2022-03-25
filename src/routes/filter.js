import { Router } from 'express';

import  { filterCourses } from "../controllers/filter.js";

const router= Router();

router.route('/').post(filterCourses);

export default router;