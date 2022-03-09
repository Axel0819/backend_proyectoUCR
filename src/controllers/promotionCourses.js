import promotionCourses from '../models/promotionCourses.js';

export const getPromotionCourses = async (req, res) => {
    const { id : idPromotion } = req.params;
    const courses = await promotionCourses.findAll({ where: { idPromotion }});

    res.status(200).json(courses);
}
//CHECK IF THE COURSE IS ALREADY IN THE PROMOTION
export const createPromotionCourse = async (req, res) => {
    const { idCourse, idPromotion, quotas } = req.body;
    const course = await promotionCourses.create({ idCourse, idPromotion, quotas });

    res.status(201).json(course);
}

export const updatePromotionCourse = async (req, res) => {
    const { idCourse, idPromotion, quotas } = req.body;
    const course = await promotionCourses.update({ idCourse, idPromotion, quotas }, { where: { idCourse, idPromotion }});

    res.status(200).json(course);
}

export const deletePromotionCourse = async (req, res) => {
    const { id : idCourse } = req.params;
    const {idPromotion } = req.body;
    const course = await promotionCourses.update({ statusPromotionCourse: 0 }, { where: { idCourse, idPromotion }});

    res.status(200).json(course);
}