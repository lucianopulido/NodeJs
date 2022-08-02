const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')


const socket = io()
// el método on es para escuchar un evento

socket.on('connect', () => {
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

socket.on('disconnect', () => {
    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
})

socket.on('enviar-mensaje', (mensaje) => {
    console.log(mensaje)
})

// el método emit es para emitir un evento
btnEnviar.addEventListener('click', () => {
    const textoMensaje = txtMensaje.value
    const mensaje = {
        id: 1,
        mensaje: textoMensaje,
        fecha: new Date()

    }
    socket.emit('enviar-mensaje', mensaje, (id) => {
        console.log('Desde el servidor', id)
    })
})