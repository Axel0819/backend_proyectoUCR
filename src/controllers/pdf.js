import coursePdf from "../models/coursePdf.js";
import v2 from "../utils/cloudinary.js";
import expressAsyncHandler from "express-async-handler";


export const setCoursePdf = expressAsyncHandler(async (req, res) => {
    const { idCourse } = req.body;
    const result = await v2.uploader.upload(req.file.path,
        {
            folder: "pdf"
        });

    if(result){
        const pdfData= await coursePdf.create({idCourse, urlPdf: result.secure_url, idPdfCloudinary: result.public_id});
        return res.status(201).json(pdfData);
    }
    res.status(500).json({message: "Error al subir el pdf"});
})

export const getCoursePdf = expressAsyncHandler(async (req, res) => {
    const { idCourse }= req.params;
    const pdf = await coursePdf.findAll({where: {idCourse}});

    if(pdf.length === 0) return res.status(404).json({message: "No se encontró el pdf"});

    res.status(200).json(pdf);
})

export const updateCoursePdf = expressAsyncHandler(async (req, res) => {
    const { idCoursePdf }= req.params;
    const pdf = await coursePdf.findByPk(idCoursePdf);

    if(!pdf) return res.status(404).json({message: `No se encontró el pdf con el id ${idCoursePdf}`});

    if(req.file) {
        await v2.uploader.destroy(pdf.idPdfCloudinary);
        const result = await v2.uploader.upload(req.file.path);
        const coursePdfUpdated = await coursePdf.update({urlPdf: result.secure_url, idPdfCloudinary: result.public_id}, {where: {idCoursePdf}});
        res.status(200).json(coursePdfUpdated);
    }
})

export const deleteCoursePdf = expressAsyncHandler(async (req, res) => {
    const { idCoursePdf }= req.params;
    const pdf = await coursePdf.findByPk(idCoursePdf);

    if(!pdf) return res.status(404).json({message: `No se encontró el pdf con el id ${idCoursePdf}`});

    await v2.uploader.destroy(coursePdf.idPdfCloudinary);
    const deleted = await coursePdf.destroy({where: { idCoursePdf }});

    res.status(200).json(deleted);
})