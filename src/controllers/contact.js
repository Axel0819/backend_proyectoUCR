import contact from '../models/contact.js';
import expressAsyncHandler from "express-async-handler";

export const getContacts = expressAsyncHandler(async(req, res) => {
    const contacts = await contact.findAll();
    if(contacts.length === 0) {
        return res.status(204).json({
            message: "No hay registros"
        });

    }
    res.status(200).json(contacts);
})

export const createContact = expressAsyncHandler(async(req, res) => {
    const { body } = req;
    const response = await contact.create(body);

    res.status(201).json(response);
})

