const path = require('path')
const color = require('colors');
const bodyParser = require('body-parser');
const express = require('express');
const engine = require('ejs-mate');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.render('pages/home');
});
app.get('/about', function(req, res) {
    res.render('pages/about');
});
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});
app.get('/projects', function(req, res) {
    res.render('pages/project');
});

app.listen(port,() => {
    console.log(color.green('the app is listening.'))
})




