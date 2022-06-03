const xlsx = require('xlsx');

/* La función recibe como parámetro la información consumida de una API. */
module.exports = (info)=>{

    /* Se crea un libro de excel. */
    const excelFile = xlsx.utils.book_new();

    /* Se crea una hoja de excel con el parámetro recibido. */
    const excelSheet = xlsx.utils.json_to_sheet(info);

    /* Se añade la hoja con la información al libro de excel. */
    xlsx.utils.book_append_sheet(excelFile, excelSheet, 'Pókemon Api');

    /* Se configura el libro con la extensión 'xlsx' y se le da el formato búfer para reducir el consumo de recursos. */
    xlsx.write(excelFile, {bookType: 'xlsx', type: 'buffer'});

    /* Se pasa el libro de búfer a binario manteniendo la extensión 'xlsx'. */
    xlsx.write(excelFile, {bookType: 'xlsx', type: 'binary'});

    /* Tomo la fecha actual para darle nombre al archivo de excel. */
    const date = new Date().toDateString();
    const fileName = date.split(' ').join('_') + '.xlsx';

    /* Se crea concretamente el archivo de tipo excel. */
    xlsx.writeFile(excelFile, `./public/file/${fileName}`);

    return fileName;
}