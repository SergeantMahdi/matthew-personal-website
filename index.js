const path = require('path')
const color = require('colors');
const bodyParser = require('body-parser');
const express = require('express');
const engine = require('ejs-mate');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcrypt');
/*Security*/
const helmet = require('helmet');
const mongoSanitize = require("express-mongo-sanitize");
const { validateProject, validateSkill, validateUser } = require('./middleware/schemaValidate.js');

/*Database*/
const mongoose = require('mongoose');

/*APIs*/
const { homePageFetch, projectPageFetch, skillCardFetch } = require("./APIs/fetchData.js");

/*Functions*/
const { createProject, editProject, deleteProject } = require("./controller/projectDatabase.js");
const { createSkill, editSkill, deleteSkill } = require("./controller/skillDatabase.js");
const { checkUser } = require("./controller/userDatabase.js");

mongoose.connect(process.env.DB_URL || 'mongodb://127.0.0.1:27017/Mahdi')
    .then(() => console.log(color.green("Mongoose is connected")))
    .catch(error => console.log(color.bgRed("MONGOOSE ERROR: ", error)));


const app = express();
const port = process.env.PORT || 3000;

dotenv.config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(mongoSanitize());
app.use(helmet());

app.use(session({secret: 'InTheNameOfGod'}))


app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.render('pages/home', { title: "Mahdi Sartipzadeh" });
});
app.get('/about', function (req, res) {
    res.render('pages/about', { title: "About Me" });
});
app.post('/about', validateSkill, createSkill)
app.put('/about', validateSkill, editSkill)
app.delete('/about', deleteSkill)

app.get('/contact', function (req, res) {
    res.render('pages/contact', { title: "Contact Me" });
});
app.get('/projects', async function (req, res) {
    res.render('pages/project', { title: "My Projects" });
});
app.post('/projects', validateProject, createProject);
app.put('/projects', validateProject, editProject);
app.delete('/projects', deleteProject);


app.get('/admin21ma8login', function (req, res) {
    res.render('pages/login', { title: "Login" });
});
app.post('/admin21ma8login', checkUser);

app.get('/admin21ma8', function (req, res) {
        res.render('pages/admin', { title: "Admin" })
});
// app.get('/create', async function (req, res) {
//     const hash = await bcrypt.hash("21ma8di79mh", 12);
//     const user = new userDB({
//         username: "sergeant_mahdi",
//         password: hash,
//         email: "mahdi.sartipzadeh@gmail.com"
//     })

//     await user.save();
//     res.send("Created")
// })

app.get('/api-project/projects', projectPageFetch);
app.get('/api-project/', homePageFetch);
app.get('/api-skill/about', skillCardFetch);

app.all('*', function (req, res) {
    res.render('pages/404page');
});

app.listen(port, () => {
    console.log(color.green('the app is listening.'))
})




