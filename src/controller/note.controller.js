const noteCrlt = {};

const Note = require('../models/Note');

noteCrlt.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
}

noteCrlt.createNewNote = async (req, res) => {
    const { title, description } = req.body
    const newNote = new Note({ title, description })

    await newNote.save().then(sucess => {
        res.redirect('/notes/all-notes')
    }).catch(err => console.log(err))
}

noteCrlt.renderNote = async (req, res) => {
    await Note.find({}).then(notes => {
        res.render('notes/all-notes', { notes });
    }).catch(err => console.log(err));

}

noteCrlt.renderEditForm = (req, res) => {
    res.send('render note edite.');
}

noteCrlt.updateNote = (req, res) => {
    res.send('render note update.');
}

noteCrlt.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)

    res.redirect('/notes/all-notes')
}

module.exports = noteCrlt;