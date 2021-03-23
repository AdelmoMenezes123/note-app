const { Schema, model } = require('mongoose');

const NotSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    categoria: { type: String},
},
{ timestamps: true }
);

module.exports = model('Note', NotSchema);
// idUser: { type: mongoose.Types.ObjectId, ref: 'Users' }