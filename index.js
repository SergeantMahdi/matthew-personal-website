const path = require('path')
const color = require('colors');
const bodyParser = require('body-parser');
const express = require('express');
const engine = require('ejs-mate');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Mahdi')
    .then(() => console.log(color.green("Mongoose is connected")))
    .catch(error => console.log(color.bgRed("MONGOOSE ERROR: ", error)));

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    description: String,
    image: String,
    link: String
})

const projectDB = mongoose.model("Project", projectSchema);



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

app.post('/projects', function(req, res) {
    
});

app.get('/admin', function(req, res) {
    res.render('pages/admin');
});
app.all('*', function(req, res) {
    res.render('pages/404page');
});

app.listen(port,() => {
    console.log(color.green('the app is listening.'))
})




