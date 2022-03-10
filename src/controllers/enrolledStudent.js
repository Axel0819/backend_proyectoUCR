import enrolledStudent from '../models/enrolledStudent.js';

export const getEnrolledStudents = async (req, res) => {
    //params from url we need
    const { ID_Course, id_promotion } = req.query;
    const enrolledStudents = await enrolledStudent.findAll({
        where: {
            ID_Course,
            id_promotion,
            studentStatus: 1
        }
    });

    if (!enrolledStudents) {
        return res.status(404).json({ message: 'No se encontraron estudiantes inscritos' });
    }
    res.status(200).json(enrolledStudents);
}

export const getEnrolledStudent = async (req, res) => {
    //params from url we need
    const { ID_Student, ID_Course, id_promotion } = req.query;
    const enrolledStudent = await enrolledStudent.findByPk(ID_Student, {
        where: {
            ID_Course,
            id_promotion,
            studentStatus: 1
        }
    });

    if (!enrolledStudent) return res.status(404).json({ error: `No se encontró el estudiante con el id ${ID_Student}` });

    res.status(200).json(enrolledStudent);
}

export const createEnrolledStudent = async (req, res) => {
    const { ID_Student, ID_Course, id_promotion, nameStudent, firstSurname, secondSurname, email, phone } = req.body;

    const register = await enrolledStudent.findOrCreate({
        where: { ID_Student, ID_Course, id_promotion },
        defaults: { ID_Student, ID_Course, id_promotion, nameStudent, firstSurname, secondSurname, email, phone }
    });
    // if(register[1]){
    //     return res.status(201).json({ message: 'Estudiante inscrito correctamente' });
    // }
    //check if the student is already enrolled to choose the correct status code
    res.status(201).json(register);
}

export const updateEnrolledStudent = async (req, res) => {
    const { id : ID_Student } = req.params;
    const { body } = req;
    const { ID_Course, id_promotion } = body;
    const isExist = await enrolledStudent.findByPk(ID_Student,{
            where: {
                ID_Course,
                id_promotion
            }
        });

    if(!isExist) return res.status(404).json({error: `No se encontró el estudiante con el id ${ID_Student}`});

    //check if i need to update all students with the same ID_Student
    const enrolledStudent = await enrolledStudent.update(body, { where: { ID_Student, id_promotion }});

    res.status(200).json(enrolledStudent);
}

//C
export const deleteEnrolledStudent = async (req, res) => {
    //CHECK IF I SEND A BODY
    const { id : ID_Student } = req.params;
    const { ID_Course, id_promotion } = req.body;   
    const isExist = await enrolledStudent.findByPk(ID_Student,
        {
            where: {
                ID_Course,
                id_promotion
            }
        });
    
    if(!isExist) return res.status(404).json({error: `No se encontró el estudiante con el id ${ID_Student}`});

    const student = await enrolledStudent.update({ studentStatus: 0 }, { 
        where:
        { 
            ID_Student,
            ID_Course,
            id_promotion
         }});

    res.status(200).json(student);
}