import promotionCourses from '../models/promotionCourses.js';

export const getPromotionCourses = async (req, res) => {
    const { idPromotion } = req.params;
    const courses = await promotionCourses.findAll({ where: { idPromotion }});

    res.json(courses);
}

export const createPromotionCourse = async (req, res) => {
    const { idCourse, idPromotion, quotas } = req.body;
    const course = await promotionCourses.create({ idCourse, idPromotion, quotas });

    res.json(course);
}

export const updatePromotionCourse = async (req, res) => {
    const { idCourse, idPromotion, quotas } = req.body;
    const course = await promotionCourses.update({ idCourse, idPromotion, quotas }, { where: { idCourse, idPromotion }});

    res.json(course);
}

//CHECK FLAGS IN THE MODEL
export const deletePromotionCourse = async (req, res) => {
    const { idCourse, idPromotion } = req.body;
    const course = await promotionCourses.destroy({ where: { idCourse, idPromotion }});

    res.json(course);
}