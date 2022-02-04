const fs = require("fs");

const crearArchivo = async (num = 5) => {
  try {
    console.log("=========");
    console.log(`Tabla del ${num}`);
    console.log("=========");
    salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${num}x${i} = ${num * i}\n`;
    }

    console.log(salida);
    fs.writeFileSync(`tabla-${num}.txt`, salida);
    
    return `tabla-${num}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
