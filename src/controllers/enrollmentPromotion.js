import enrollmentPromotion from "../models/enrollmentPromotion.js";

export const getEnrollmentPromotions = async(req, res) => {
    const enrollmentPromotions = await enrollmentPromotion.findAll();

    res.json(enrollmentPromotions);
};

export const getEnrollmentPromotion = async(req, res) => {
    const { enrollmentId } = req.params;
    const enrollmentPromotion = await enrollmentPromotion.findByPk(enrollmentId);
    if(!enrollmentPromotion) return res.status(404).json({error: `No se encontró la promoción de matrícula con el id ${enrollmentId}`})
    res.json(enrollmentPromotion);
};

export const createEnrollmentPromotion = async(req, res) => {
    const { namePromotion, startDate, endDate, startTime, endTime } = req.body;
    const response = await enrollmentPromotion.create({namePromotion, startDate, endDate, startTime, endTime});

    res.json(response);
};

export const updateEnrollmentPromotion = async(req, res) => {
    const { enrollmentId } = req.params;
    const { body } = req;
    const isExist = await enrollmentPromotion.findByPk(enrollmentId);
    
    if(!isExist) return res.status(404).json({error: `No se encontró la promoción de matrícula con el id ${enrollmentId}`})

    const enrollmentPromotion = await enrollmentPromotion.update(body, {where: {enrollmentId}});

    res.json(enrollmentPromotion);
};

export const deleteEnrollmentPromotion = async(req, res) => {
    const { enrollmentId } = req.params;
    const isExist = await enrollmentPromotion.findByPk(enrollmentId);

    if(!isExist) return res.status(404).json({error: `No se encontró la promoción de matrícula con el id ${enrollmentId}`})
    
    const enrollmentPromotion = await enrollmentPromotion.destroy({where: {enrollmentId}});
    
    res.json(enrollmentPromotion);
};