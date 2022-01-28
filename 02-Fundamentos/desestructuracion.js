const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneracion",
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

function imprimeHeroe(heroe){
  const { nombre, apellido, poder, edad = 0} = deadpool; // desestructuracion, es equivalente a lo de arriba
  console.log(nombre,apellido,poder, edad);
}

imprimeHeroe(deadpool)

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1,h2,h3] = heroes;

console.log(h1,h2,h3);
