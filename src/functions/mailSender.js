const nodemailer = require('nodemailer');
const path = require('path');

/* Función de envio de correos, recibe dos parámetros, el mail del destinatario y el archivo que se adjunta. */
module.exports = (mail, file)=>{

    /* Conexión con gmail y configuración de protocolo. */
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ulisesarmolla78@gmail.com',
            pass: 'rdoszugqlfpbqjbd'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    /* Armado del mensaje.  */
    const message = {
        from: '<ulisesarmolla78@gmail.com>',
        to: mail,
        subject: 'Prueba envio de archivo Excel desde App NodeJS.',
        text: 'Archivo con lista de pókemons y enlaces!',

        /* Archivo adjunto. */
        attachments: [{
            filename: file,
            path: path.join(__dirname, `../../public/file/${file}`)
        }]
    };

    /* Se envia el correo. */
    transport.sendMail(message, (error, info)=>{
        if (error) {
            console.log(error + '\n\n***** El mail no pudo ser enviado... *****\n\n');
        } else {
            console.log(info);
        }
    });
}