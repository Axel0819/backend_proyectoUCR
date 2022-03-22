import coursePrice from "../models/coursePrice.js";
import expressAsyncHandler from "express-async-handler";

export const getAllCoursePrice = expressAsyncHandler(async(req, res) => {
    const pricesData = await coursePrice.findAll();

    if(pricesData.length === 0){
        return res.status(204).json({message: "No hay tarifas registradas"});
    }
    res.status(200).json(pricesData);
})

export const getCoursePriceById = expressAsyncHandler(async(req, res) => {
    const { idPrice } = req.params;
    const priceData = await coursePrice.findOne({ where: { idPrice }});
    if(!priceData){
        return res.status(404).json({message: `No se encontró la tarifa con id ${idPrice}`});
    }
    res.status(200).json(priceData);
})

export const createCoursePrice = expressAsyncHandler(async(req, res) => {
    const { nationalPrice, nationalRenewalPrice, internationalPrice, internationalRenewalPrice } = req.body;
    const priceData = await coursePrice.create({nationalPrice, nationalRenewalPrice, internationalPrice, internationalRenewalPrice});
    
    res.status(201).json(priceData);
})

export const updateCoursePrice = expressAsyncHandler(async(req, res) => {
    const { idPrice } = req.params;
    const { body } = req;
    const isExist = await coursePrice.findByPk(idPrice);

    if(!isExist) return res.status(404).json({error: `No se encontró la tarifa con el id ${idPrice}`});

    const priceUpdated= await coursePrice.update( body, { where: { idPrice }});

    res.status(200).json(priceUpdated);
})

export const deleteCoursePrice = expressAsyncHandler(async(req, res) => {
    const { idPrice } = req.params;
    const isExist = await coursePrice.findByPk(idPrice);

    if(!isExist) return res.status(404).json({error: `No se encontró la tarifa con el id ${idPrice}`});

    const priceDeleted= await coursePrice.destroy({ where: { idPrice }});

    res.status(200).json(priceDeleted);
})