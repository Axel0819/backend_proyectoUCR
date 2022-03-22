import courseLearnings from "../models/courseLearnings.js";
import expressAsyncHandler from "express-async-handler";

export const getAllLearnings = expressAsyncHandler(async(req, res) => {
    const allLearnings= await courseLearnings.findAll();
    
    if(allLearnings.length === 0){
        return res.status(404).json({
            message: "No se encontraron registros"
        });
    }
    res.status(200).json(allLearnings);
})

export const getCourseLearnings = expressAsyncHandler(async(req, res) => {
    const { idCourse } = req.params;
    const learnings = await courseLearnings.findAll({ where: { idCourse }});
    
    //check if i send an empty array of learnings or send a 204 status code
    if(learnings.length > 0){
        return res.status(200).json(learnings);
    }

    res.status(204).json({message: "No hay registros"});
})

export const createLearning = expressAsyncHandler(async(req, res) => {
    const { idCourse, description } = req.body;

    const newLearning = await courseLearnings.create({ idCourse, description });
    res.status(201).json(newLearning);
})

export const updateLearning = expressAsyncHandler(async(req, res) => {
    const { idLearning } = req.params;
    const { body } = req;
    const isExist = await courseLearnings.findByPk(idLearning);
    
    if(!isExist) return res.status(404).json({error: `No se encontró el aprendizaje con el id ${idLearning}`});

    const learningUpdated= await courseLearnings.update( body, { where: { idLearning }});
    res.status(200).json(learningUpdated);
})

export const deleteLearning = expressAsyncHandler(async(req, res) => {
    const { idLearning } = req.params;
    const isExist = await courseLearnings.findByPk(idLearning);

    if(!isExist) return res.status(404).json({error: `No se encontró el aprendizaje con el id ${idLearning}`});

    const learningDeleted= await courseLearnings.destroy({ where: { idLearning }});

    res.status(200).json(learningDeleted);
})