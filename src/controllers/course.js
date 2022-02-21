const Course= require("../models/Course");

const getCourses = async(req, res) => {
    const courses = await Course.findAll()
    res.json(courses)
}

const getCourse = async(req, res) => {
    const { OMIModel } = req.params
    const course = await Course.findByPk(OMIModel)
    if(!course) return res.status(404).json({error: `No se encontro el cursos con el id ${OMIModel}`})
    res.json(course)
}

const createCourse = async(req, res) => {
    const { OMIModel, nameCourse, schedule, description, weeklyHours } = req.body
    if(!OMIModel || !nameCourse || !schedule || !description || !weeklyHours) return res.status(400).json({error: 'Faltan datos'})
    const course = await Course.create({OMIModel, nameCourse, schedule, description, weeklyHours})
    res.status(201).json(course)
}

const updateCourse = async(req, res) => {
    const { OMIModel } = req.params
    const { nameCourse, schedule, description, weeklyHours } = req.body
    if(!nameCourse || !schedule || !description || !weeklyHours) return res.status(400).json({error: 'Faltan datos'})
    const course = await Course.update({nameCourse, schedule, description, weeklyHours}, {where: {OMIModel}})
    res.json(course)
}

//Verificar si se puede eliminar en dado caso que este relacionado con otra tabla
const deleteCourse = async(req, res) => {
    const { OMIModel } = req.params
    const course = await Course.destroy({where: {OMIModel}})
    res.json(course)
}

module.exports = {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
}


    