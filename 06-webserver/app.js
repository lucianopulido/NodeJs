require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;
const hbs = require('hbs')


// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {
})
// Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {nombre: 'Fernando Herrera', titulo: 'Curso de Node'})
})

app.get('/generic', (req, res) => {
    res.render('generic', {nombre: 'Fernando Herrera', titulo: 'Curso de Node'})
})

app.get('/elements', (req, res) => {
    res.render('elements', {nombre: 'Fernando Herrera', titulo: 'Curso de Node'})
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})
app.listen(port, () => {
    console.log(`El servidor se esta ejecutando en el puerto: ${port}`)
})