const noteCrlt = {};

const Note = require('../models/Note');

noteCrlt.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
}

noteCrlt.createNewNote = async (req, res) => {
    const { title, description } = req.body
    const newNote = new Note({ title, description })
    
    await newNote.save().then(sucess=>{
        res.send('new note add.');
    }).catch(err=>console.log(err))
}

noteCrlt.renderNote = (req, res) => {
    res.send('render note.');
}

noteCrlt.renderEditForm = (req, res) => {
    res.send('render note edite.');
}

noteCrlt.updateNote = (req, res) => {
    res.send('render note update.');
}

noteCrlt.deleteNote = (req, res) => {
    res.send('deleting note.');
}

module.exports = noteCrlt;