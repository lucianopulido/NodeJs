const empleados = [
  {
    id: 1,
    nombre: "Luciano",
  },

  {
    id: 2,
    nombre: "Camila",
  },

  {
    id: 3,
    nombre: "Abril",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },

  {
    id: 2,
    nombre: 1500,
  },
];

const getEmpleado = (id) => {
  return (promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado ? resolve(empleado) : reject(`No existe el empleado con id ${id}`);
  }));
};

const getSalario = (id) => {
  return (promesa = new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    salario
      ? resolve(salario)
      : reject(`No existe salario para el empleado con id ${id}`);
  }));
};

const id = 1;
/*getEmpleado(id)
  .then((empleado) => console.log(empleado))
  .catch((err) => console.log(err));

getSalario(id)
  .then((salario) => console.log(salario))
  .catch((err) => console.log(err));
*/
let nombre;

getEmpleado(id)
.then(empleado => {
  nombre = empleado;
  return getSalario(id)})
.then(salario => console.log('El empleado con el nombre: ', nombre , 'tiene un salario de: ', salario))
.catch(err => console.log(err));