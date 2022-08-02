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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);
  if (empleado) {
    callback(false, empleado);
  } else {
    callback(true, `El empleado con id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id);
  if (salario) {
    callback(false, salario);
  } else {
    callback(true, `El Salario del empleado con id ${id} no existe`);
  }
};

id = 3;

getEmpleado(id, (err, empleado) => {
  if (err) {
    return console.log(empleado);
  }

  getSalario(id, (err, salario) => {
    if (err) {
      return console.log(salario);
    }
    console.log('El empleado: ',empleado.nombre, 'tiene un salario de: ', salario.salario);
  });
});
