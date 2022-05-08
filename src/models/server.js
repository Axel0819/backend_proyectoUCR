import express from 'express';
import cors  from 'cors';
import db  from "../database/db.config.js";
import errorHandler from "../middlewares/error.js";

//Routes
// import enrolledStudentsRoutes from "../routes/enrolledStudents.js";
// import courseRoutes from "../routes/course.js";
// import courseLearningRoutes from "../routes/courseLearning.js";
// import courseCommentRoutes from "../routes/courseComments.js";
// import coursePriceRoutes from "../routes/coursePrice.js";
// import enrollmentPromotionRoutes from "../routes/enrollmentPromotion.js";
// import promotionCoursesRoutes from "../routes/promotionCourses.js";
// import uploadRoutes from "../routes/upload.js";
// import filterRoutes from "../routes/filter.js";
import contactRoutes from "../routes/contact.js";

class Server{
    app;
    port;
    apiPaths= {
        course: '/api/course',
        enrolledStudents: '/api/enrolledStudents',
        courseLearning: '/api/courseLearning',
        courseComment: '/api/courseComment',
        coursePrice: '/api/coursePrice',
        enrollmentPromotion: '/api/enrollmentPromotion',
        promotionCourses: '/api/promotionCourses',
        contact: '/api/contact',
        upload: '/api/upload',
        filter: '/api/filter',
        electoralList: '/api/electoralList'
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        //load initial methods
        //this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try{
            await db.authenticate();
            await db.sync();
            console.log('DB connected');
        }catch(error){ throw new Error(error); }
    }

    middlewares(){
        //CORS
        const corsOptions={
            credentials: true,
            methods:["POST", "GET"],
            origin: process.env.HEROKUPATH || "*"
        }
        this.app.use(cors(corsOptions));

        //Reading body
        this.app.use(express.json());
    }

    routes(){
        // this.app.use(this.apiPaths.course, courseRoutes);
        // this.app.use(this.apiPaths.courseLearning, courseLearningRoutes);
        // this.app.use(this.apiPaths.courseComment, courseCommentRoutes);
        // this.app.use(this.apiPaths.coursePrice, coursePriceRoutes);
        // this.app.use(this.apiPaths.enrollmentPromotion, enrollmentPromotionRoutes);
        // this.app.use(this.apiPaths.enrolledStudents, enrolledStudentsRoutes);
        // this.app.use(this.apiPaths.promotionCourses, promotionCoursesRoutes);
        // this.app.use(this.apiPaths.upload, uploadRoutes);
        // this.app.use(this.apiPaths.filter, filterRoutes);
        this.app.use(this.apiPaths.contact, contactRoutes);
        this.app.use(errorHandler);
    }

    listen(){
        this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`));
    }

}

export default Server;