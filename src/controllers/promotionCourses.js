import promotionCourses from '../models/promotionCourses.js';

export const getPromotionCourses = async (req, res) => {
    const { id : idPromotion } = req.params;
    const courses = await promotionCourses.findAll({ where: { idPromotion }});

    if(!courses) {
        return res.status(204).json({ message: 'No hay cursos' });
    }

    res.status(200).json(courses);
}

export const createPromotionCourse = async (req, res) => {
    const { idCourse, idPromotion, quotas } = req.body;
    const isExist = await promotionCourses.findOne({ where: { idCourse, idPromotion }});

    if(!isExist) {
        const course = await promotionCourses.create({ idCourse, idPromotion, quotas });
        res.status(201).json(course);
    }

    res.status(400).json({ message: 'El curso ya está en la promoción' });

}

export const updatePromotionCourse = async (req, res) => {
    const { idCourse } = req.params;
    const { idPromotion, quotas } = req.body;
    const course = await promotionCourses.update({ quotas }, { where: { idCourse, idPromotion }});
    //check if the course is updated
    res.status(200).json(course);
}

export const deletePromotionCourse = async (req, res) => {
    const { id : idCourse } = req.params;
    const {idPromotion } = req.body;
    const course = await promotionCourses.update({ statusPromotionCourse: 0 }, { where: { idCourse, idPromotion }});

    res.status(200).json(course);
}