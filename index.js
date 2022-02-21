const express = require('express');
const course = require('./src/routes/course');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const authConnection = require('./src/database/authenticate.connection');

// Load env vars
dotenv.config();
const PORT = process.env.PORT || 3030;

//db connection
authConnection();

//Middlewares
app.use(express.json());
app.use(cors());

//Using routes
app.use('/course',course);

//server connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})