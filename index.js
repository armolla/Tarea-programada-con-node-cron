const main = require('./src/functions/main');
const cron = require('node-cron');

/* Aquí cron se ejecuta todos los días a la 8 am.
cron.schedule('00 08 * * 0-6', ()=>{
    main('armollaulises1978@gmail.com');
});*/

/* Cada 5 segundos envia un mail y estará activo indefinidamente. */
cron.schedule('5 * * * * *', ()=>{

    /* Ingresar como parámetro el mail de un destinatario. */
    main('armollaulises1978@gmail.com');
});