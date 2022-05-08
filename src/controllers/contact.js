import expressAsyncHandler from "express-async-handler";
import nodemailer from "nodemailer";

export const sendEmail= expressAsyncHandler(async(req,res)=> {
    const { body:contactParts }= req;
    const transporter= nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.MAILUSER,
            pass: process.env.MAILPASSW
        },
    });
    const mailOptions= {
        from: contactParts.email,
        to: process.env.MAILUSER,
        subject: `Consulta ${contactParts.name} ${contactParts.firstSurname} ${contactParts.secondSurname}  🚢`,
        html:   `<h3>${contactParts.message}</h3>
                <h4>Contacto: ${contactParts.phone}</h4>`
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
        }else{
            res.status(201).json(info.response);
        }
    })
})
