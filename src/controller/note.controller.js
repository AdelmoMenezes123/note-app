const noteCrlt = {};

const Note = require('../models/Note');

noteCrlt.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
}

noteCrlt.createNewNote = async (req, res) => {
    const { title, description, categoria } = req.body;
    const newNote = new Note({ title, description, categoria })

    req.flash('success_msg', 'Note Added Successfully')

    newNote.user = req.user.id;
    await newNote.save().then(success => {
        res.redirect('/notes/all-notes')
    }).catch(err => console.log(err))
}

noteCrlt.renderNote = async (req, res) => {
    
    const hqs = await Note.find({ "categoria": "hqs", user: req.user.id })
    const mangas = await Note.find({ "categoria": "mangas", user: req.user.id })
    const livros = await Note.find({ "categoria": "livros", user: req.user.id })
    const filmes = await Note.find({ "categoria": "filmes", user: req.user.id })
    const series = await Note.find({ "categoria": "series", user: req.user.id })
    const animes = await Note.find({ "categoria": "animes", user: req.user.id })
    const animacoes = await Note.find({ "categoria": "animacoes" })

    res.render('notes/all-notes', { hqs, mangas, livros, filmes, series, animes, animacoes });
}

noteCrlt.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id)

    if(note.user != req.user.id){
        return res.redirect('/notes/all-notes')
    }

    res.render('notes/edite-note', { note })
}

noteCrlt.updateNote = async (req, res) => {
    const { title, description } = req.body;

    await Note.findByIdAndUpdate(req.params.id, { title, description })

    req.flash('success_msg', 'Note updated Successfully')
    res.redirect('/notes/all-notes')
}

noteCrlt.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)

    req.flash('success_msg', 'Note Deleted Successfully')
    res.redirect('/notes/all-notes')
}

module.exports = noteCrlt;