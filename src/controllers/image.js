import courseImage from "../models/courseImage.js";
import v2 from "../utils/cloudinary.js";
import expressAsyncHandler from "express-async-handler";


export const setCourseImage = expressAsyncHandler(async (req, res) => {
    const { idCourse } = req.body;
    const result = await v2.uploader.upload(req.file.path,
        {
            folder: "image"
        });

    if(result){
        const courseImages= await courseImage.create({idCourse, urlImage: result.secure_url, idCloudinaryImage: result.public_id});
        return res.status(201).json(courseImages);
    }
    res.status(500).json({message: "Error al subir la imagen"});
})

export const getCourseImage = expressAsyncHandler(async (req, res) => {
    const {idCourse}= req.params;
    const courseImages = await courseImage.findAll({where: {idCourse}});

    if(courseImages.length === 0) return res.status(404).json({message: "No se encontraron imágenes"});

    res.status(200).json(courseImages);
})

export const updateCourseImage = expressAsyncHandler(async (req, res) => {
    const {idCourseImage}= req.params;
    const courseImages = await courseImage.findByPk(idCourseImage);

    if(!courseImages) return res.status(404).json({message: `No se encontró la imagen con el id ${idCourseImage}`});

    if(req.file) {
        await v2.uploader.destroy(courseImages.idCloudinaryImage);
        const result = await v2.uploader.upload(req.file.path);
        const courseImagesUpdated = await courseImage.update({urlImage: result.secure_url, idCloudinaryImage: result.public_id}, {where: {idCourseImage}});
        res.status(200).json(courseImagesUpdated);
    }
})

export const deleteCourseImage = expressAsyncHandler(async (req, res) => {
    const {idCourseImage}= req.params;
    const courseImages = await courseImage.findByPk(idCourseImage);

    if(!courseImages) return res.status(404).json({message: `No se encontró la imagen con el id ${idCourseImage}`});

    await v2.uploader.destroy(courseImages.idCloudinaryImage);
    const deleted = await courseImage.destroy({where: {idCourseImage}});

    res.status(200).json(deleted);
})