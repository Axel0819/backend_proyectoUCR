import expressAsyncHandler from "express-async-handler";
import enrollmentPromotion from "../models/enrollmentPromotion.js";

export const getEnrollmentPromotions = expressAsyncHandler(async(req, res) => {
    const enrollmentPromotions = await enrollmentPromotion.findAll({where: { promotionStatus: 1 }});
    if(enrollmentPromotions.length === 0){
        return res.status(204).json({
            message: "No hay promociones registradas"
        });

    }
    res.status(200).json(enrollmentPromotions);
})

export const getEnrollmentPromotion = expressAsyncHandler(async(req, res) => {
    const { enrollmentId } = req.params;
    const promotion = await enrollmentPromotion.findOne({where: {enrollmentId, promotionStatus: 1}});

    if(!promotion) return res.status(404).json({error: `No existe promoción con id ${enrollmentId}`});

    res.status(200).json(promotion);
})

export const createEnrollmentPromotion = expressAsyncHandler(async(req, res) => {
    const { namePromotion, startDate, endDate, startTime, endTime } = req.body;
    const validate = await enrollmentPromotion.findOne({where: {namePromotion, promotionStatus: 1}});
    
    if(validate) return res.status(409).json({message: "Ya existe una promoción con ese nombre"});

    const promotion = await enrollmentPromotion.create({namePromotion, startDate, endDate, startTime, endTime});
    res.status(201).json(promotion);
})

export const updateEnrollmentPromotion = expressAsyncHandler(async(req, res) => {
    const { enrollmentId } = req.params;
    const { body } = req;
    const isExist = await enrollmentPromotion.findByPk(enrollmentId, {where: {promotionStatus: 1}});
    
    if(!isExist) return res.status(404).json({message: `No existe promoción con id ${enrollmentId}`})

    const promotionUpdated= await enrollmentPromotion.update(body, {where: {enrollmentId}});

    res.status(200).json(promotionUpdated);
})

export const deleteEnrollmentPromotion = expressAsyncHandler(async(req, res) => {
    const { enrollmentId } = req.params;
    const isExist = await enrollmentPromotion.findOne({where: {enrollmentId:enrollmentId,promotionStatus: 1}});

    if(!isExist) return res.status(404).json({message: `No existe promoción con id ${enrollmentId}`})
    
    const promotionDeleted= await enrollmentPromotion.update({promotionStatus: 0}, {where: {enrollmentId}});
    
    res.status(200).json(promotionDeleted);
})