const express = require('express');
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars');
const hbs = require('hbs');
const path = require('path');
const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')
const cors = require('cors');
// const morgan = require('morgan')

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const passport = require('passport');

// Initializations
const app = express();
require('./config/passport')

//Settings
// app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
     defaultLayout: 'main',
     layoutsDir: path.join(app.get('views'), 'layouts'),
     partialsDir: path.join(app.get('views'), 'partials'),
     helpers: require('./handlers/handlebars'),
     extname: '.hbs',
     handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', '.hbs');

// hbs.registerHelper('ifEquals', function (arg1, arg2, options) {
//      return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
// });

// hbs.registerHelper('ifEqualsIds', function (arg1, arg2, options) {
//      return (JSON.stringify(arg1) == JSON.stringify(arg2)) ? options.fn(this) : options.inverse(this);
// });


//Middlewares
// app.use(morgan())
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(methodOverride('_method'))
app.use(session({
     secret: 'secret',
     resave: true,
     saveUninitialized: true
}));
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());

//Global Variables

app.use((req, res, next) => {
     res.locals.success_msg = req.flash('success_msg');
     res.locals.error_msg = req.flash('error_msg');
     res.locals.error = req.flash('error');
     res.locals.user = req.user || null;
     next();
})

//routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/user.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app