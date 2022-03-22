import multer from "multer";
import path from "path";

const multerConfig = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const validExtensions = [".jpg", ".jpeg", ".png", ".pdf"];
        const ext= path.extname(file.originalname);
        if(!validExtensions.includes(ext)){
            cb(new Error('Esta extensión de archivo no es soportada'), false);
            return;
        }
        cb(null, true);
    }
});

export default multerConfig;