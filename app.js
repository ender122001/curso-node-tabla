const { crearArchivo } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs");

// console.clear();


crearArchivo( argv.b, argv.l, argv.f )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(err => console.log(err));