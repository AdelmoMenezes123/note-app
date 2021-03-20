const noteCrlt = {};

noteCrlt.renderNoteForm = (req, res) => {
    res.send('note add.');
}

noteCrlt.createNewNote = (req, res) => {
    res.send('new note add.');
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
    res.send('deleting note .');
}

module.exports = noteCrlt;