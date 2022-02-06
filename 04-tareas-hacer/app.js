require("colors");
const {inquirerMenu} = require('./helpers/inquirer');

console.clear();

const main = async () => {
  let opt = "";

  do {
    opt = await inquirerMenu();
    console.log("La opción seleccionada es: ", opt);
   
  } while (opt !== "0");
};

main();
