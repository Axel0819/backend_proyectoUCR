import { Router } from 'express';

import  { filterCourses, filterCourseByName } from "../controllers/filter.js";

const router= Router();

router.route('/').post(filterCourses);

router.get('/:name', filterCourseByName);

export default router;