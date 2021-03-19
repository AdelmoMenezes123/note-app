const mongoose = require('mongoose');

const {NOTE_APP_HOST, NOTE_APP_DATABASE} = process.env
const MONGODB_URL = `mongodb://${NOTE_APP_HOST}/${NOTE_APP_DATABASE}`

mongoose.connect(MONGODB_URL, {
     useUnifiedTopology: true,
     useNewUrlParser: true
}).then(db=>console.log('Database está conectado'))
.catch(err=>console.log('Erro DB -> ', err));