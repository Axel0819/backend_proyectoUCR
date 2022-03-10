import {getAllComments, getCourseComments, createComment, updateComment, deleteComment} from '../controllers/courseComment.js';
import { Router } from 'express';
import { fieldsValidate } from '../middlewares/fieldsValidate.js';
import { check } from 'express-validator';

const router = Router();
router.route('/').get(getAllComments).post([
    check('idCourse', 'El id del curso es requerido').trim().notEmpty().escape(),
    check('comment', 'El comentario es requerido').trim().notEmpty().escape(),
    check('persoName', 'El nombre del usuario es requerido').trim().notEmpty().escape(),
    ,fieldsValidate
],createComment);

router.get('/:idCourse',[
    check('idCourse', 'El id del curso es requerido').trim().notEmpty().escape(),
    fieldsValidate
], getCourseComments);

router.route('/:idComment',[
    check('idComment', 'El id del comentario es requerido').trim().notEmpty().escape(),
    fieldsValidate
]).put(updateComment).delete(deleteComment);

export default router;