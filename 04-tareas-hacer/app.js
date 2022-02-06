require('colors');
const {inquirerMenu, pausa} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
console.clear();

const main = async () => {
  let opt = "";

  do {
    //opt = await inquirerMenu();
    //console.log("La opción seleccionada es: ", opt);

    const tarea = new Tarea('Comprar comida');
    const tareas = new Tareas();

    tareas.listado[tarea.id] = tarea;
    console.log(tareas);
    await pausa();
   
  } while (opt !== "0");
};

main();
