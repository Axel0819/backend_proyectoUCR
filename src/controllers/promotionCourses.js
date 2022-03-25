import promotionCourses from '../models/promotionCourses.js';
import expressAsyncHandler from "express-async-handler";
import { Op } from 'sequelize';
import { status } from '../enum/status.js';

export const getPromotionCourses = expressAsyncHandler(async(req, res) => {
    const { id : idPromotion } = req.params;
    const courses = await promotionCourses.findAll({ where: { idPromotion, statusPromotionCourse: {
        [Op.ne]: status.deleted
    } } });

    if(courses.length === 0) return res.status(404).json({ message: 'No hay cursos asociados a la promoción' });

    res.status(200).json(courses);
})

export const createPromotionCourse = expressAsyncHandler(async(req, res) => {
    const { idCourse, idPromotion, totalQuotas, schedule,place } = req.body;
    const isExist = await promotionCourses.findOne({ where: { idCourse, idPromotion }});

        if(!isExist) {
            const courseData = await promotionCourses.create({ idCourse, idPromotion, totalQuotas,schedule,place });
            return res.status(201).json(courseData);
        }
        
        res.status(409).json({ message: 'El curso ya está en la promocion' });
})

export const updatePromotionCourse = expressAsyncHandler(async(req, res) => {
    const { id : idPromotionCourse } = req.params;
    const { totalQuotas, schedule,place } = req.body;
    const isExist = await promotionCourses.findOne({ where: { idPromotionCourse, statusPromotionCourse: {[Op.ne]: status.deleted }}});
    let availableQuotasControl = 0;

    if(!isExist){
        return res.status(409).json({ message: 'El curso no está en la promoción' });
    }
    //CHECKING THE AVAILABLE QUOTAS BEFORE UPDATE TO PERSIST THE CHANGES IN THE DB
    availableQuotasControl = totalQuotas > isExist.totalQuotas ? isExist.availableQuotas + (totalQuotas - isExist.totalQuotas) :  isExist.availableQuotas;

    const courseUpdate= await promotionCourses.update({ totalQuotas, availableQuotas: availableQuotasControl, schedule,place}, { where: { idPromotionCourse }});
    res.status(200).json(courseUpdate);
})

export const deletePromotionCourse = expressAsyncHandler(async(req, res) => {
    const { id : idPromotionCourse } = req.params;
    const isExist = await promotionCourses.findOne({ where: { idPromotionCourse, statusPromotionCourse: 1 }});

    if(!isExist) return res.status(404).json({ message: 'El curso no está en la promoción' });

    //response= 1: delete, 0: no delete
    const courseDeleted= await promotionCourses.update({ statusPromotionCourse: status.deleted }, { where: {idPromotionCourse }});
    res.status(200).json(courseDeleted);
})