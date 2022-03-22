import enrolledStudent from '../models/enrolledStudent.js';
import expressAsyncHandler from "express-async-handler";

export const getStudentsByPromotion= expressAsyncHandler(async(req, res) => {
    const { id:idPromotion } = req.params;
    const enrolledStudents = await enrolledStudent.findAll( {where: {idPromotion,studentStatus: 1}} );

    if(enrolledStudents.length > 0) {
        return res.status(200).json(enrolledStudents);
    }

    res.status(404).json({ message: 'No se encontraron estudiantes inscritos' });
})

export const getStudentsByCourse = expressAsyncHandler(async(req, res) => {
    const { id:idPromotionCourse } = req.params;
    const enrolledStudents= await enrolledStudent.findAll( {where: {idPromotionCourse,studentStatus: 1}});
    
    if (enrolledStudents.length > 0) {
        return res.status(200).json(enrolledStudents);
    }
    
    res.status(404).json({ message: 'No se encontraron estudiantes inscritos' });
})

export const createEnrolledStudent = expressAsyncHandler(async(req, res) => {
    const { idNumber, idPromotionCourse, idPromotion, nameStudent, firstSurname, secondSurname, email, phone } = req.body;

    const register = await enrolledStudent.findOrCreate({
        where: { idNumber, idPromotionCourse },
        defaults: { idNumber, idPromotionCourse, idPromotion, nameStudent, firstSurname, secondSurname, email, phone }
    });

    if(register[1]){
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

    const studentDeleted= await enrolledStudent.update({ studentStatus: 0 }, {where: {idEnrolledStudent}});

    res.status(200).json(studentDeleted);
})