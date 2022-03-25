import { Router } from 'express';
import { getElectoralList } from '../controllers/electoralList.js';

const router = Router();

router.route('/').get(getElectoralList);

export default router;