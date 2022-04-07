import electoralList from '../models/electoralList.js';
import expressAsyncHandler from "express-async-handler";

export const autocompleteStudentData= expressAsyncHandler(async(req, res)=>{
    const { id }= req.params;
    const isExist = await electoralList.findByPk(id);
    return isExist ? res.status(200).json(isExist) : res.status(404).json({error: `No se encontró una persona con id ${id}`});
})