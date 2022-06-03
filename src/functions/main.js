const apiCall = require('./apiCall');
const excelConverter = require('./excelConverter');
const mailSender = require('./mailSender');

/* Función principal que invoca al resto dependiendo de las responsabilidades. */
module.exports = async (email)=>{
    try {

        /* Consume un servicio externo y retorna la información. */
        const info = await apiCall();

        /* Transforma la información en un archivo excel y lo guarda en la app. */
        const file = excelConverter(info);

        /* Busca el archivo excel creado y lo envia por mail. */
        mailSender(email, file);
        
    } catch (error) {
        console.log(error);
    }

}