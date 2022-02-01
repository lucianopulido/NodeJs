const { crearArchivo } = require("./helpers/multiplicar");
const num = 6;

crearArchivo(num)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
