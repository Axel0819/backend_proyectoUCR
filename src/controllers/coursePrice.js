import coursePrice from "../models/coursePrice.js";

export const getAllCoursePrice = async (req, res) => {
    const pricesData = await coursePrice.findAll();

    res.json(pricesData);
};

export const getCoursePrice = async (req, res) => {
    const { idCourse } = req.params;
    const priceData = await coursePrice.findOne({ where: { idCourse }});

    res.json(priceData);
};

export const createCoursePrice = async (req, res) => {
    const { idCourse, nationalPrice, nationalRenewalPrice, internationalPrice, internationalRenewalPrice } = req.body;
    const priceData = await coursePrice.findOrCreate({ where: { idCourse }, defaults: { idCourse, nationalPrice, nationalRenewalPrice, internationalPrice, internationalRenewalPrice }});

    res.json(priceData);
}

export const updateCoursePrice = async (req, res) => {
    const { idPrice } = req.params;
    const { body } = req;
    const isExist = await courseComments.findByPk(idPrice);

    if(!isExist) return res.status(404).json({error: `No se encontró la tarifa con el id ${idPrice}`});

    const price = await courseComments.update( body, { where: { idComment }});

    res.json(price);
};

//CHECK FLAGS IN THE MODEL
export const deleteCoursePrice = async (req, res) => {
    const { idPrice } = req.params;
    const isExist = await courseComments.findByPk(idPrice);

    if(!isExist) return res.status(404).json({error: `No se encontró la tarifa con el id ${idPrice}`});

    const price = await courseComments.destroy({ where: { idPrice }});

    res.json(price);
};