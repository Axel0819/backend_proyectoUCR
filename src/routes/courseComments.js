import {getAllComments, getCourseComments, createComment, updateComment, deleteComment} from '../controllers/courseComment.js';
import { Router } from 'express';

const router = Router();
router.route('/').get(getAllComments).post(createComment);

router.get('/:idCourse', getCourseComments);

router.route('/:idComment').put(updateComment).delete(deleteComment);

export default router;