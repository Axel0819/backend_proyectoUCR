import courseComments from "../models/courseComments.js";
import expressAsyncHandler from "express-async-handler";

export const getAllComments = expressAsyncHandler(async(req, res) => {
    const comments = await courseComments.findAll();
    if(!comments) {
        return res.status(204).json({
            message: "No se encontraron comentarios"
        });
    }
    res.status(200).json(comments);
})

export const getCourseComments = expressAsyncHandler(async(req, res) => {
    const { idCourse } = req.params;
    const comments = await courseComments.findAll({ where: { idCourse }});

    if(comments.length === 0) return res.status(404).json({ message: "No se encontraron comentarios"});

    res.status(200).json(comments);
})

export const createComment = expressAsyncHandler(async(req, res) => {
    const { idCourse, comment, persoName } = req.body;
    const commentData = await courseComments.create({ idCourse, comment, persoName });

    res.status(201).json(commentData);
})

export const updateComment = expressAsyncHandler(async(req, res) => {
    const { idComment } = req.params;
    const { body } = req;
    const isExist = await courseComments.findByPk(idComment);

    if(!isExist) return res.status(404).json({error: `No se encontró el comentario con el id ${idComment}`});

    const commentUpdated= await courseComments.update( body, { where: { idComment }});
    res.status(200).json(commentUpdated);
})

export const deleteComment = expressAsyncHandler(async(req, res) => {
    const { idComment } = req.params;
    const isExist = await courseComments.findByPk(idComment);

    if(!isExist) return res.status(404).json({error: `No se encontró el comentario con el id ${idComment}`});

    const commentDeleted= await courseComments.destroy({ where: { idComment }});
    res.status(200).json(commentDeleted);
})