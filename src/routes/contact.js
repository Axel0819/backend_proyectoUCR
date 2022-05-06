import { Router } from 'express';

import { sendEmail } from '../controllers/contact.js';

const router = Router();

router.route('/').post(sendEmail);

export default router;