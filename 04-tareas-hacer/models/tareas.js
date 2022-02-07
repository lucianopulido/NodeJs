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
}

module.exports = Tareas;
