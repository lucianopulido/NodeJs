console.log('Inicio del programa');

setTimeout(() => {
    console.log('Primer CallBack')
}, 3000);


setTimeout(() => {
    console.log('Segundo CallBack')
}, 0);


setTimeout(() => {
    console.log('Tercer CallBack')
}, 0);

console.log('Fin del programa');