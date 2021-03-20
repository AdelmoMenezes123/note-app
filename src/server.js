const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const morgan = require('morgan')

// Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.engine('.hbs', exphbs({
     defaultLayout: 'main',
     layoutsDir: path.join(app.get('views'), 'layouts'),
     partialsDir: path.join(app.get('views'), 'partials'),
     extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan())
app.use(express.urlencoded({extended:false}))
//Global Variables

//routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app