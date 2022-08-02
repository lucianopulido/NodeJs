require("colors");
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require("./helpers/inquirer");
const {guardarDB, leerDB} = require("./helpers/databaseaccess");
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
                tareas.listarTareasEstado(true);
                break;

            case "4":
                tareas.listarTareasEstado(false);
                break;

            case "5":
                const ids = await mostrarListadoChecklist(tareas.getTareas);
                tareas.toggleCompletadas(ids);
                break;

            case "6":
                const id = await listadoTareasBorrar(tareas.getTareas);
                const ok = await confirmar("¿Estas seguro?");
                if (ok && id !== '0') {
                    tareas.borrarTarea(id);
                    console.log("Tarea borrada correctamente");
                }
                break;

            case "0":
                break;
        }

        guardarDB(tareas.getTareas);
        await pausa();
    } while (opt !== "7");
};

main();
