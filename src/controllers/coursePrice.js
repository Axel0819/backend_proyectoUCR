import coursePrice from "../models/coursePrice.js";

export const getAllCoursePrice = async (req, res) => {
    const pricesData = await coursePrice.findAll({
        where: { priceStatus : 1 }
    });

    if(!pricesData){
        return res.status(404).json({message: "No se encontraron precios"});
    }
    res.status(200).json(pricesData);
};

export const getCoursePriceById = async (req, res) => {
    const { idPrice } = req.params;
    const priceData = await coursePrice.findOne({ where: { idPrice }});
    if(!priceData){
        return res.status(404).json({message: "No se encontró el precio"});
    }
    res.status(200).json(priceData);
};

export const createCoursePrice = async (req, res) => {
    const { idCourse, nationalPrice, nationalRenewalPrice, internationalPrice, internationalRenewalPrice } = req.body;
    const priceData = await coursePrice.create({ idCourse, nationalPrice, nationalRenewalPrice, internationalPrice, internationalRenewalPrice });

    res.status(201).json(priceData);
}

export const updateCoursePrice = async (req, res) => {
    const { idPrice } = req.params;
    const { body } = req;
    const isExist = await courseComments.findByPk(idPrice);

    if(!isExist) return res.status(404).json({error: `No se encontró la tarifa con el id ${idPrice}`});

    const price = await courseComments.update( body, { where: { idComment }});

    res.status(200).json(price);
};

export const deleteCoursePrice = async (req, res) => {
    const { idPrice } = req.params;
    const isExist = await courseComments.findByPk(idPrice);

    if(!isExist) return res.status(404).json({error: `No se encontró la tarifa con el id ${idPrice}`});

    const price = await courseComments.update({ priceStatus: 0 }, { where: { idPrice }});

    res.status(200).json(price);
};