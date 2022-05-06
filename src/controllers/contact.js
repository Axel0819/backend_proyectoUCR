import expressAsyncHandler from "express-async-handler";
import nodemailer from "nodemailer";

export const sendEmail= expressAsyncHandler(async(req,res)=> {
    const destinationEmail= "chavarriamontoyaaxel@gmail.com";
    const passwEmail= "uhtilfjhowbxtqxl";
    const { body:contactParts }= req;
    const transporter= nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: destinationEmail,
            pass: passwEmail
        }
    });
    const mailOptions= {
        from: contactParts.email,
        to: destinationEmail,
        subject: `Consulta de ${contactParts.name} ${contactParts.firstSurname} ${contactParts.secondSurname}`,
        text: `${contactParts.message}
                Contacto cliente: ${contactParts.phone}`
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
        }else{
            res.status(201).json(info.response);
        }
    })
})
