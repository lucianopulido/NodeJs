const fs = require("fs");
const colors  = require('colors');

const crearArchivo = async (base, listar = false, limite = 10) => {
  try {
    salida = "";

    for (let i = 1; i <= limite; i++) {
      salida += `${base}${'x'}${i} ${'='} ${base * i}\n`;
    }

    if (listar) {
      console.log("===========".green);
      console.log('Tabla del: '.green, colors.blue(base));
      console.log("===========".green);
      console.log(salida);
    }

    fs.writeFileSync(`./archivos/tabla-${base}.txt`, salida);

    return `tabla-${base}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
