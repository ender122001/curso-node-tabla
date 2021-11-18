const argv = require("yargs")
                .option("b", {
                    alias: "numero1",
                    type: "number",
                    demandOption: true,
                    describe: "es la base de la tabla de multiplicar"
                })
                .option("l", {
                    alias: "listar",
                    type: "boolean",
                    default: false,
                    describe: "lista la tabla de multiplicar"
                })
                .option("f", {
                    alias: "multiplicars",
                    type: "number",
                    demandOption: true,
                    describe: "cantidad a multiplicar "
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ){
                        throw "la base tiene que ser un numero";
                    }
                    return true;
                })
                .argv;

module.exports = argv;