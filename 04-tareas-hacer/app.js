require("colors");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
console.clear();

const main = async () => {
  let opt = "";

  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //crear opción
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        break;

      case "2":
        console.log(tareas.getTareas);
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

    await pausa();
  } while (opt !== "7");
};

main();
