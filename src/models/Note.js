const { Schema, model } = require('mongoose');

const NotSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    categoria: { type: String, required: true },
    user: { type: String, required: true }
},
    { timestamps: true }
);

module.exports = model('Note', NotSchema);