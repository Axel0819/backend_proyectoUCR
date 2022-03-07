import course from "../models/course.js";

export const getCourses = async(req, res) => {
    const courses = await course.findAll();

    res.json(courses);
}

export const getCourse = async(req, res) => {
    const { OMIModel } = req.params
    const course = await course.findByPk(OMIModel)
    if(!course) return res.status(404).json({error: `No se encontró el curso con el id ${OMIModel}`})
    res.json(course)
}

export const createCourse = async(req, res) => {
    const { OMIModel, nameCourse, schedule, description, weeklyHours } = req.body

    const response = await course.findOrCreate({
        where: {OMIModel},
        defaults: {OMIModel, nameCourse, schedule, description, weeklyHours}
    });
    res.json(response);

}

export const updateCourse = async(req, res) => {
    const { OMIModel } = req.params;
    const { body } = req;
    const isExist = await course.findByPk(OMIModel);
    
    if(!isExist) return res.status(404).json({error: `No se encontró el curso con el id ${OMIModel}`})

    const course = await course.update(body, {where: {OMIModel}});

    res.json(course)
}

//CHECK FLAG FIELD
export const deleteCourse = async(req, res) => {
    const { OMIModel } = req.params;
    const isExist = await course.findByPk(OMIModel);

    if(!isExist) return res.status(404).json({error: `No se encontró el curso con el id ${OMIModel}`})
    
    const course = await course.destroy({where: {OMIModel}});
    
    res.json(course);
}



    