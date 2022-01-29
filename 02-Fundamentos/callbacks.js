/*setTimeout(() => {
    console.log("hola mundo");
},1000);
*/

const getUsuarioById = (id, callback) => {
  const usuario = {
    id: id,
    nombre: "Luciano",
  };

  setTimeout(() => {
    callback(usuario);
  }, 2500);
};

getUsuarioById(10, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase())
});
