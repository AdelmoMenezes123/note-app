const mongoose = require('mongoose');

const { NOTE_APP_HOST, NOTE_APP_DATABASE, NOTE_APP_PASSWORD } = process.env
const MONGODB_URL = `mongodb+srv://${NOTE_APP_HOST}:${NOTE_APP_PASSWORD}@cluster0.vedqo.mongodb.net/${NOTE_APP_DATABASE}?retryWrites=true&w=majority` || 'mongodb://localhost/dbName';
mongoose.connect(MONGODB_URL, {
     useUnifiedTopology: true,
     useNewUrlParser: true,
     useCreateIndex: true
}).then(db => console.log('Database está conectado'))
     .catch(err => console.log('Erro DB -> ', err));

// mongodb+srv://Note_App:adm123321Adm@cluster0.vedqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
