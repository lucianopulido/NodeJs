require("colors");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/databaseaccess");
const Tareas = require("./models/tareas");
console.clear();

const main = async () => {
  let opt = "";

  const tareas = new Tareas();

  const tareasDB = leerDB();
  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //crear opción
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        break;

      case "2":
        tareas.listadoCompleto();
        break;

      case "3":
        break;

      case "4":
        break;

      case "5":
        break;

      case "6":
        break;

      case "0":
        break;
    }

    guardarDB(tareas.getTareas);
    await pausa();
  } while (opt !== "7");
};

main();
