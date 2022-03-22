import { Router } from "express";
import { setCourseImage, getCourseImage, updateCourseImage, deleteCourseImage} from "../controllers/image.js";
import { setCoursePdf,getCoursePdf, updateCoursePdf, deleteCoursePdf } from "../controllers/pdf.js";
import multerConfig from "../utils/multer.js";

const router= Router();

//img
router.route('/upload-images/:idCourse').get(getCourseImage);

router.route('/upload-images').post(multerConfig.single('image'),setCourseImage);

router.route('/upload-images/:idCourseImage').put(multerConfig.single('image'),updateCourseImage).delete(deleteCourseImage);
//pdf
router.route('/upload-pdf/:idCourse').get(getCoursePdf);

router.route('/upload-pdf').post(multerConfig.single('pdf'),setCoursePdf);

router.route('/upload-pdf/:idCoursePdf').put(multerConfig.single('pdf'),updateCoursePdf).delete(deleteCoursePdf);

export default router;