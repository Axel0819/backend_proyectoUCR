const db= require('../database/db.config');

//authenticate connection and sync all define models to database
const authConnection= async()=>{
    try{
        await db.authenticate();
        await db.sync();
        console.log('DB connected');
    }catch(error){ throw new Error(error); }
};

module.exports= authConnection;