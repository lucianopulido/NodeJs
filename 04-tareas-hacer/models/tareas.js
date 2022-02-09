const Tarea = require("./tarea");
require("colors");
class Tareas {
  listado = {};

  constructor() {
    this.listado = {};
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this.listado[tarea.id] = tarea;
  }

  get getTareas() {
    const listadoArray = [];
    Object.keys(this.listado).forEach((key) => {
      const tarea = this.listado[key];
      listadoArray.push(tarea);
    });
    return listadoArray;
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this.listado[tarea.id] = tarea;
    });
  }

  listadoCompleto() {
    console.log();
    this.getTareas.forEach((tarea, i) => {
      const indice = `${i + 1}.`;
      const { descripcion, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      console.log(`${indice.green} ${descripcion}::${estado}\n`);
    });
  }
}

module.exports = Tareas;
