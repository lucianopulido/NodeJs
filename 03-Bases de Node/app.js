const { crearArchivo } = require("./helpers/multiplicar");

console.clear();
const [, , args3 = "num=5"] = process.argv;
const [, num] = args3.split("=");

crearArchivo(num)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
