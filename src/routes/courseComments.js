import {getAllComments, getCourseComments, createComment, updateComment, deleteComment} from '../controllers/courseComment.js';
import { Router } from 'express';

const router = Router();

router.get('/', getAllComments);

router.get('/:id', getCourseComments);

router.post('/', createComment);

router.put('/:id', updateComment);

router.delete('/:id', deleteComment);

export default router;