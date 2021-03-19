const express = require('express');
const path = require('path');

// Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:false}));

//Middlewares

//Global Variables

//routes
app.get('/',(req,res)=>{
     return res.send('ola brasil')
})

//static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app