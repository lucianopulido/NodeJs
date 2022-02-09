const Tarea = require("./tarea");

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
}

module.exports = Tareas;
