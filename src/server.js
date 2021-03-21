const express = require('express');
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars');
const path = require('path');
const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')

// const morgan = require('morgan')

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


// Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
     defaultLayout: 'main',
     layoutsDir: path.join(app.get('views'), 'layouts'),
     partialsDir: path.join(app.get('views'), 'partials'),
     extname: '.hbs',
     handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', '.hbs');

//Middlewares
// app.use(morgan())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(methodOverride('_method'))
app.use(session({
     secret:'secret',
     resave:true,
     saveUninitialized: true

}));
app.use(flash());

//Global Variables

app.use((req,res, next)=>{
    res.locals.success_msg = req.flash('success_msg');
     next();
})

//routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/user.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app