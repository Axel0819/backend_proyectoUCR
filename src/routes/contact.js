import { Router } from 'express';

import {getContacts, createContact} from '../controllers/contact.js';
import { fieldsValidate } from '../middlewares/fieldsValidate.js';
import { check } from 'express-validator';


const router = Router();

router.route('/').get(getContacts).post([
    check('name', "El nombre es requerido").trim().notEmpty().escape(),
    check('firstSurname', "El primer apellido es requerido").trim().notEmpty().escape(),
    check('secondSurname', "El segundo apellido es requerido").trim().notEmpty().escape(),
    check('message', "El mensaje es requerido").trim().notEmpty().escape(),
    check('email', "El email es requerido").trim().isEmail().normalizeEmail(),
    check('phone', "El teléfono es requerido").trim().notEmpty().escape(),
    fieldsValidate
], createContact);

export default router;