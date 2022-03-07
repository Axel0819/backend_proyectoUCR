import courseComments from "../models/courseComments.js";

export const getAllComments = async (req, res) => {
    const comments = await courseComments.findAll();

    res.json(comments);
};

export const getCourseComments = async (req, res) => {
    const { idCourse } = req.params;
    const comments = await courseComments.findAll({ where: { idCourse }});

    res.json(comments);
};

export const createComment = async (req, res) => {
    const { idCourse, description, persoName } = req.body;
    const comment = await courseComments.create({ idCourse, description, persoName });

    res.json(comment);
}

export const updateComment = async (req, res) => {
    const { idComment } = req.params;
    const { body } = req;
    const isExist = await courseComments.findByPk(idComment);

    if(!isExist) return res.status(404).json({error: `No se encontró el comentario con el id ${idComment}`});

    const comment = await courseComments.update( body, { where: { idComment }});

    res.json(comment);
};

//CHECK FLAGS IN THE MODEL
export const deleteComment = async (req, res) => {
    const { idComment } = req.params;
    const isExist = await courseComments.findByPk(idComment);

    if(!isExist) return res.status(404).json({error: `No se encontró el comentario con el id ${idComment}`});

    const comment = await courseComments.destroy({ where: { idComment }});

    res.json(comment);
};