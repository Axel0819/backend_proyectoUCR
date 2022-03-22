import course from "../models/course.js";
import expressAsyncHandler from "express-async-handler";

//0:deleted, 1:open, 2:close
export const getCourses = expressAsyncHandler(async(req, res) => {
    const courses = await course.findAll({where: {courseStatus: 1}});
    if(courses.length === 0) {
        return res.status(204).json({
            message: "No hay cursos registrados"
        });

    }
    res.status(200).json(courses);
})

export const getCourse = expressAsyncHandler(async(req, res) => {
    const { idCourse } = req.params
    const response = await course.findByPk(id);

    if(!response) return res.status(404).json({error: `No se encontró el curso con el id ${idCourse}`});
    
    res.status(200).json(response);
})

export const createCourse = expressAsyncHandler(async(req, res) => {
    const { idPrice, nameCourse, description, totalHours, category } = req.body

    const response = await course.findOrCreate({
        where: { nameCourse },
        defaults: { idPrice, nameCourse, description, totalHours, category }
    });
    
    if(response[1]){
        return res.status(201).json({
            course: response[0]
        });
    }
    //create course when the course exists but the statusCourse is 0
    if(response[0].courseStatus === 0){
        await response[0].update({idPrice,nameCourse, description, totalHours, category, courseStatus: 1}, {where: {idCourse: response[0].idCourse}});
        return res.status(201).json({
            course: response[0]
        });
    }
    res.status(409).json({
        message: "Este curso ya existe"
    });

})

export const updateCourse = expressAsyncHandler(async(req, res) => {
    const { idCourse } = req.params;
    const { body } = req;
    const isExist = await course.findByPk(idCourse, {where: {courseStatus: 1}});
    
    if(!isExist) return res.status(404).json({error: `No se encontró el curso con el id ${idCourse}`})

    //response= 1: update, 0: no update
    const courseUpdated= await course.update(body, {where: {idCourse}});
    res.status(200).json(courseUpdated);
})

export const deleteCourse = expressAsyncHandler(async(req, res) => {
    const { idCourse } = req.params;
    const isExist = await course.findByPk(id);

    if(!isExist) return res.status(404).json({error: `No se encontró el curso con el id ${idCourse}`})
    
    //response= 1: delete, 0: no delete
    const courseDeleted= await course.update({courseStatus: 0}, {where: {idCourse}});
    res.status(200).json(courseDeleted);
})



    