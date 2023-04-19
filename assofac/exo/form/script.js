// importation des modules:
const http = require('http');
const express = require('express');
const path = require('path');

// module permettant de récupérer facilement les données envoyées:
const body_parser = require('body-parser');

// permet de créer une app express:
const app = express();


// parse application/x-www-form-urlencoded
app.use(body_parser.urlencoded({ extended: true }))

// parse application/json
app.use(body_parser.json())

// set the view engine to ejs:
app.set('view engine', 'ejs');

// for css:
app.use(express.static(__dirname + '/views'));
app.use(express.static(path.join(__dirname, 'assets')));

// notre serveur sera sur le port 3000:
const port = process.env.PORT || 3000;

// home:
app.get('/', (req, res) => {
    res.render('index')
})

// contact:
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.post('/contact', (req, res) => {
    console.log('infos: ----------', req.body, '----------');
})

// sign in:
app.get('/connecter', (req, res) => {
    res.render('connecter')
})
app.post('/connecter', (req, res) => {
    console.log('connection: ----------', req.body, '----------');
})

// sign up:
app.get('/inscrire', (req, res) => {
    res.render('inscrire')
})

app.post('/inscrire', (req, res) => {
    console.log('inscription: ----------', req.body, '----------');
})
app.listen(port, () => console.log(`Notre application est démarrrée sur : http://localhost:${port}`))

