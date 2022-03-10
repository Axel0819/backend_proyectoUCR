import courseLearnings from "../models/courseLearnings.js";


export const getAllLearnings = async (req, res) => {
    const allLearnings= await courseLearnings.findAll();
    if(!allLearnings){
        return res.status(404).json({
            message: "No se encontraron registros"
        });
    }
    res.status(200).json(allLearnings);
}

export const getCourseLearnings = async (req, res) => {
    const { idCourse } = req.params;
    const courseLearnings = await courseLearnings.findAll({ where: { idCourse }});

    if(!courseLearnings){
        return res.status(404).json({
            message: "No se encontraron registros"
        });
    }
    res.status(200).json(courseLearnings);
}

export const createLearning = async (req, res) => {
    const { idCourse, description } = req.body;
    const courseLearning = await courseLearnings.create({ idCourse, description });

    res.status(201).json(courseLearning);
}

export const updateLearning = async (req, res) => {
    const { idLearning } = req.params;
    const { body } = req;
    const isExist = await courseLearnings.findByPk(idLearning);
    
    if(!isExist) return res.status(404).json({error: `No se encontró el aprendizaje con el id ${idLearning}`});

    const courseLearning = await courseLearnings.update( body, { where: { idLearning }});

    res.status(200).json(courseLearning);
};

export const deleteLearning = async (req, res) => {
    const { idLearning } = req.params;
    const isExist = await courseLearnings.findByPk(idLearning);

    if(!isExist) return res.status(404).json({error: `No se encontró el aprendizaje con el id ${idLearning}`});

    const courseLearning = await courseLearnings.destroy({ where: { idLearning }});

    res.status(200).json(courseLearning);
}