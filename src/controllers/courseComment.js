import courseComments from "../models/courseComments.js";

export const getAllComments = async (req, res) => {
    const comments = await courseComments.findAll();
    if(!comments) {
        return res.status(404).json({
            message: "No se encontraron comentarios"
        });
    }
    res.status(200).json(comments);
}

export const getCourseComments = async (req, res) => {
    const { idCourse } = req.params;
    //check if the course exists
    const comments = await courseComments.findAll({ where: { idCourse }});
    if(!comments) {
        return res.status(404).json({
            message: "No se encontraron comentarios"
        });
    }
    res.status(200).json(comments);
}

export const createComment = async (req, res) => {
    const { idCourse, comment, persoName } = req.body;
    const response = await courseComments.create({ idCourse, comment, persoName });

    res.status(201).json(response);
}

export const updateComment = async (req, res) => {
    const { idComment } = req.params;
    const { body } = req;
    const isExist = await courseComments.findByPk(idComment);

    if(!isExist) return res.status(404).json({error: `No se encontró el comentario con el id ${idComment}`});

    const comment = await courseComments.update( body, { where: { idComment }});

    res.status(200).json(comment);
}

export const deleteComment = async (req, res) => {
    const { idComment } = req.params;
    const isExist = await courseComments.findByPk(idComment);

    if(!isExist) return res.status(404).json({error: `No se encontró el comentario con el id ${idComment}`});

    const comment = await courseComments.destroy({ where: { idComment }});

    res.status(200).json(comment);
}