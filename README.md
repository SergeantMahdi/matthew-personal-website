# My Personal Website

This project was my first journey in the Web dev world.
I mostly used native javascript and css to maintain my knowlege,
the naming of the css classes are not good but I'll fix it over time.
 
> [!CAUTION]
> The reason that the EJS is the majority of written code in this project is using complex SVGs.

## Packages That I Used

* Express
* EJS
* Joi
* Mongoose
* Express-session
* bcrypt
* env
* Connent-Mongo
* and more ...

## How to Run the Code:

1. execute the below console command in the project directory:
```console
npm i
```
or
```console
npm install
```
2. make a file and name it " .env "
3. inside the env file add these paramater
```env
PORT=3000
DB_URL=mongodb://127.0.0.1:27017/Database
SESSION_SECRET=ASecret
ADMIN_USERNAME=yourUsername
ADMIN_PASSWORD=yourPassword
ADMIN_EMAIL=yourEmail
```

4. run this command in your console:
```console
node index.js
```
Or 
```console
npm install -g nodemon
nodemon index.js
```
5. go to the http://localhost:3000/ 

it's done now you also have access to the admin section.

# Road Map

## APIs
this folder contains a JS file which send the data from admin page to the HOME or PROJECTS page and vice versa.

## controler
this folder contains all the files that manipulate database, doing operation like create, edit or remove
and ```Joi``` is also included into this file

## Middleware
this folder contains all types of validation like Login, skill and project validations.

## Public
this folder contains all images, scripts and css files.

## Router
this folder contains routes for different pages.

## utilities
this folder contains a error handler.

## views
this folder contains all ejs files.