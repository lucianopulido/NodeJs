const fs = require("fs");
const colors  = require('colors');

const crearArchivo = async (base, listar = false) => {
  try {
    salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${base}${'x'.green}${i} ${'='.green} ${base * i}\n`;
    }

    if (listar) {
      console.log("===========".green);
      console.log('Tabla del: '.green, colors.blue(base));
      console.log("===========".green);
      console.log(salida);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
