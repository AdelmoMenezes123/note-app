const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');

// Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.engine('.hbs', exphbs({
     defaultLayout: 'main',
     layoutsDir: path.join(app.get('views'), 'layouts'),
     partialsDir: path.join(app.get('views'), 'patials'),
     extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares

//Global Variables

//routes
app.get('/', (req, res) => {
     return res.render('index')
})

//static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app