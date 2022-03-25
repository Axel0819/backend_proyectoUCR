import course from "../models/course.js";
import expressAsyncHandler from "express-async-handler";
import { Op } from "sequelize";
//import { status } from "../enum/status.js";

export const filterCourses = expressAsyncHandler(async(req, res) => {
    
    /*const filterObjExample=
        {
           hours:[16, 12, 8],
           q: ["courseName"],
           status: ["active", "inactive", "all"],
           type: ["omi", "others"]
        }
    */
    
    const { hours, q, status, type }= req.body;
    const filterObj= {};
    if (hours.length > 0) {
        filterObj.totalHours= {
            [Op.or]: hours
        };
    }
    if (q.length > 0) {
        filterObj.nameCourse= {
            [Op.substring]: `${q}`
        };
    }
    if (status.length > 0) {
        filterObj.courseStatus= status;
    }
    if (type.length > 0) {
        filterObj.category= type;
    }
    const courses= await course.findAll({
        where: filterObj
    });
    res.status(200).json(courses);
    
})