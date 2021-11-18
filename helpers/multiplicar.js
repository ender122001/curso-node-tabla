const { rejects } = require("assert");
const fs = require("fs");
const colors = require("colors");


const crearArchivo = ( numero1, listar, multiplicars ) => {

    const promesa = new Promise (( resolve, rejects ) => {

        

        let salida = "";
        for (var v=0; v <= multiplicars; v++){

            const resultado = numero1 * v;
            salida += `${numero1} * ${v} = ${resultado}\n`;
            // console.log(`${numero1} * ${v} = ${resultado}`);

        }

        if( listar ){
            console.log("---------------".green);
            console.log(` tabla del ${numero1}`.green);
            console.log("---------------".green);
            console.log( salida );
        }

        fs.writeFileSync( `./salida/tabla-${numero1}.txt`, salida ); 

        if (fs.existsSync(`./salida//tabla-${numero1}.txt`)) {
            resolve(`tabla-${numero1} creado`);
        } else {
            rejects( "no existe" );
        }
    });

    return promesa;
     
} 

module.exports = {
    crearArchivo
}