import enrolledStudent from '../models/enrolledStudent.js';

export const getEnrolledStudents = async (req, res) => {
    const { ID_Course, id_promotion } = req.params;
    const enrolledStudents = await enrolledStudent.findAll({
        where: {
            ID_Course,
            id_promotion,
            studentStatus: 1
        }
    });
    res.json(enrolledStudents);
}

export const getEnrolledStudent = async (req, res) => {
    const { ID_Student, ID_Course, id_promotion } = req.params;
    const enrolledStudent = await enrolledStudent.findByPk(ID_Student, {
        where: {
            ID_Course,
            id_promotion,
            studentStatus: 1
        }
    });

    if (!enrolledStudent) return res.status(404).json({ error: `No se encontró el estudiante con el id ${id}` });
    res.json(enrolledStudent);
}

export const createEnrolledStudent = async (req, res) => {
    const { ID_Student, ID_Course, id_promotion, nameStudent, firstSurname, secondSurname, email, phone } = req.body;

    const register = await enrolledStudent.findOrCreate({
        where: { ID_Student },
        defaults: { ID_Student, ID_Course, id_promotion, nameStudent, firstSurname, secondSurname, email, phone }
    });
    //check if the student is already enrolled to choose the correct status code
    res.status(201).json(register);
    
};

export const updateEnrolledStudent = async (req, res) => {
    const { ID_Student } = req.params;
    const { body } = req;
    const { ID_Course, id_promotion } = body;
    const isExist = await enrolledStudent.findByPk(ID_Student,{
            where: {
                ID_Course,
                id_promotion
            }
        });

    if(!isExist) return res.status(404).json({error: `No se encontró el estudiante con el id ${ID_Student}`});

    const enrolledStudent = await enrolledStudent.update(body, { where: { ID_Student }});

    res.status(200).json(enrolledStudent);
};

//C
export const deleteEnrolledStudent = async (req, res) => {
    const { ID_Student, ID_Course, id_promotion } = req.params;
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
};