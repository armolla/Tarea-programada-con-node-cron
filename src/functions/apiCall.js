const fetch = require('node-fetch');

/* Función que consume recursos de la API. */
module.exports = async ()=>{
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const result = await response.json();

        /*  */
        const count = result.count / 20;
        let data = result.results;
        let offset = 20;
       
        for (let i = 1; i < count; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
            const result = await response.json();
            result.results.forEach(result => {
                data.push(result);
            });
            offset+=20;
        }
        return data;
    } catch (error) {
        console.log(error + '\n\n***** La API dejó de funcionar... *****\n\n');
    }
}