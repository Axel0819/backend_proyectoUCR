import electoralList from '../models/electoralList.js';
import expressAsyncHandler from "express-async-handler";

export const getElectoralList = expressAsyncHandler(async(req, res) => {
    const list = await electoralList.findAll();
    res.status(200).json(list);
})