const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs").argv;

console.clear();

console.log(argv);
console.log('base:yargs',argv.num);

const num = argv.num;

crearArchivo(num)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
 