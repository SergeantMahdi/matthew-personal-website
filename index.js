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
app.use(bodyParser.urlencoded({extended: true}));
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
app.get('/projects', async function (req, res) {
    res.render('pages/project');
});
app.get('/api-project/projects', async function (req, res) {
    try {
        const data = await projectDB.find({});
        res.json(data);
    } catch (err) {
        res.status(500).send("Error fetching projects");
    }
});
app.get('/api-project/', async function (req, res) {
    try {
        const data = await projectDB.find({}).sort({createdAt: -1}).limit(6);
        res.json(data);
    } catch (err) {
        res.status(500).send("Error fetching projects");
    }
});

app.post('/projects', async function (req, res) {
    const newProject = new projectDB({
    name: req.body.projectName,
    description: req.body.projectDescription,
    image: req.body.projectImage,
    link: req.body.projectLink
    })
    await newProject.save();
    res.render('pages/project');
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




