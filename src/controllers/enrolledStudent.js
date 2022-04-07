import enrolledStudent from '../models/enrolledStudent.js';
import promotionCourses from '../models/promotionCourses.js';
import electoralList from '../models/electoralList.js';
import expressAsyncHandler from "express-async-handler";
import { Op } from 'sequelize';
import { status } from '../enum/status.js';

export const getStudentsByPromotion= expressAsyncHandler(async(req, res) => {
    const { id:idPromotion } = req.params;
    const enrolledStudents = await enrolledStudent.findAll( {where: {idPromotion,studentStatus: status.active}} );

    if(enrolledStudents.length > 0) {
        return res.status(200).json(enrolledStudents);
    }

    res.status(404).json({ message: 'No se encontraron estudiantes inscritos' });
})

export const getStudentsByCourse = expressAsyncHandler(async(req, res) => {
    const { id:idPromotionCourse } = req.params;
    const enrolledStudents= await enrolledStudent.findAll( {where: {idPromotionCourse,studentStatus: status.active}});

    if (enrolledStudents.length > 0) {
        return res.status(200).json(enrolledStudents);
    }
    
    res.status(404).json({ message: 'No se encontraron estudiantes inscritos' });
})

export const createEnrolledStudent = expressAsyncHandler(async(req, res) => {
    const { idNumber, identificationType, idPromotionCourse, idPromotion, nameStudent, firstSurname, secondSurname, email, phone } = req.body;
    const { availableQuotas }= await promotionCourses.findOne({ where: { idPromotionCourse, statusPromotionCourse: {
        [Op.ne]: status.deleted
    } }});

    if(availableQuotas === 0){
        promotionCourses.update({ statusPromotionCourse: status.inactive}, { where: { idPromotionCourse }});
        return res.status(409).json({ message: 'No hay cupos disponibles' });
    } 
    const register = await enrolledStudent.findOrCreate({
        where: { idNumber, idPromotionCourse },
        defaults: { idNumber, identificationType, idPromotionCourse, idPromotion, nameStudent, firstSurname, secondSurname, email, phone }
    });

    if(register[1]){
        promotionCourses.update({ availableQuotas: availableQuotas - 1 }, { where: { idPromotionCourse }});
        return res.status(201).json(register[0]);
    }
        
    res.status(409).json({ message: 'Estudiante ya inscrito' })
})

export const updateEnrolledStudent = expressAsyncHandler(async(req, res) => {
    const { id : idEnrolledStudent } = req.params;
    const { body } = req;
    const isExist = await enrolledStudent.findByPk(idEnrolledStudent);

    if(!isExist) return res.status(404).json({error: `No se encontró el estudiante con el id ${idEnrolledStudent}`});

    const studentUpdated= await enrolledStudent.update(body, {where: {idEnrolledStudent}});
    res.status(200).json(studentUpdated);
})

export const deleteEnrolledStudent = expressAsyncHandler(async(req, res) => {
    const { id : idEnrolledStudent } = req.params;
    const isExist = await enrolledStudent.findByPk(idEnrolledStudent);
    
    if(!isExist) return res.status(404).json({error: `No se encontró el estudiante con el id ${idEnrolledStudent}`});

    const studentDeleted= await enrolledStudent.update({ studentStatus: status.deleted }, {where: {idEnrolledStudent}});

    res.status(200).json(studentDeleted);
})

export const autocompleteStudentData= expressAsyncHandler(async(req, res)=>{
    const { id }= req.params;
    const isExist = await electoralList.findByPk(id);
    return isExist ? res.status(200).json(isExist) : res.status(404).json({error: `No se encontró una persona con id ${id}`});
})