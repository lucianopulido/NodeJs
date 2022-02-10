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

    borrarTarea(id = "") {
        if (this.listado[id]) {
            delete this.listado[id];
        }
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
            const {descripcion, completadoEn} = tarea;
            const estado = completadoEn ? "Completada".green : "Pendiente".red;

            console.log(`${indice.green} ${descripcion}::${estado}\n`);
        });
    }

    listarTareasEstado(completadas = true) {
        console.log();
        let contador = 0;
        this.getTareas.forEach((tarea) => {
            const {descripcion, completadoEn} = tarea;
            const estado = completadoEn ? "Completada".green : "Pendiente".red;

            if (completadas) {
                if (completadoEn) {
                    contador += 1;
                    console.log(
                        `${
                            (contador.toString() + ".").green
                        } ${descripcion}::${completadoEn.green}\n`
                    );
                }
            } else {
                if (!completadoEn) {
                    contador += 1;
                    console.log(
                        `${(contador.toString() + ".").green} ${descripcion}::${estado}\n`
                    );
                }
            }
        });
    }

    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this.listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString().green;
            }
        });

        this.getTareas.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this.listado[tarea.id].completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;
