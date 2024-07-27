const path = require('path')
const color = require('colors');
const bodyParser = require('body-parser');
const express = require('express');
const engine = require('ejs-mate');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const session = require('express-session');
const limitReq = require('express-rate-limit');
const mongoStore = require('connect-mongo');

/*Security*/
const helmet = require('helmet');
const mongoSanitize = require("express-mongo-sanitize");
const { isLoggedIn, validateAPI } = require('./middleware/schemaValidate.js');

/*Database*/
const mongoose = require('mongoose');

/*APIs*/
const { homePageFetch, projectPageFetch, skillCardFetch } = require("./APIs/fetchData.js");

/*ROUTES*/
const projectRoute = require("./router/projectsRoute.js");
const aboutRoute = require("./router/aboutRoute.js");
const adminRoute = require("./router/adminRoute.js");
const otherRoute = require("./router/otherRoute.js");
const { createUser } = require('./createUser.js');

dotenv.config()

mongoose.connect(process.env.DB_URL || 'mongodb://127.0.0.1:27017/Mahdi')
    .then(() => console.log(color.green("Mongoose is connected")))
    .catch(error => console.log(color.bgRed("MONGOOSE ERROR: ", error)));


const app = express();
const port = process.env.PORT || 3000;



Limited requests
const requestLimition = limitReq({
    windowsMs: 5 * 60 * 1000,
    max: 100
})


//MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(mongoSanitize());
app.use(helmet({
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            "img-src": ["'self'", "data:", "https:"],
        },
    },
}));
app.use(requestLimition)
const sessionOption = {
    store: mongoStore.create({
        mongoUrl: process.env.DB_URL,
        collectionName: "userSession",
        secret: process.env.SESSION_SECRET
    }),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        expires: (Date.now() + 7 * 24 * 60 * 60 * 1000),
        maxAge: 7 * 24 * 60 * 60 * 1000, //Expire in 7 Days
        sameSite: 'lax',
        httpOnly: true
    }
}

app.use(session(sessionOption))


app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Routes
app.use(adminRoute);
app.use(projectRoute);
app.use(aboutRoute);
//app.get("/create", createUser);

//APIs
app.get('/api-project/projects', validateAPI, projectPageFetch);
app.get('/api-project/', validateAPI, homePageFetch);
app.get('/api-skill/about', validateAPI, skillCardFetch);
app.use(otherRoute);

app.listen(port, () => {
    console.log(color.green('the app is listening.'))
})




