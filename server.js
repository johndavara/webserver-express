const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');


/*
app.get('/', function(req, res) {
    //res.send('Hola Mundo')
    let salida = {
        nombre: 'Johnnatan',
        edad: 25,
        url: req.url
    };
    res.send(salida);
})
*/
app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Johnnatan',
    })
})

app.get('/about', function(req, res) {
    res.render('about', {
        imagen: 'assets/img/ranarene.jpg',
        h1: "La Rana Rene",
    })
})
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

//npm run nodemon
// heroku login
//heroku git:remote -a johnnatan-webpage
//git push heroku master