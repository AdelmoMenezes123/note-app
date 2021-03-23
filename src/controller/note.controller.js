const noteCrlt = {};

const Note = require('../models/Note');

noteCrlt.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
}

noteCrlt.createNewNote = async (req, res) => {
    const { title, description, categoria } = req.body;
    const newNote = new Note({ title, description, categoria })

    req.flash('success_msg', 'Note Added Successfully')

    await newNote.save().then(success => {
        res.redirect('/notes/all-notes')
    }).catch(err => console.log(err))
}

noteCrlt.renderNote = async (req, res) => {

    const hqs = await Note.find({ "categoria": "hqs" })
    const mangas = await Note.find({ "categoria": "mangas" })
    const livros = await Note.find({ "categoria": "livros" })
    const filmes = await Note.find({ "categoria": "filmes" })
    const series = await Note.find({ "categoria": "series" })
    const animes = await Note.find({ "categoria": "animes" })
    const desenhos = await Note.find({ "categoria": "desenhos" })

    // const notes = await Note.find()
    const array = []

    await array.push(
        { "hqs": hqs },
        { "mangas": mangas },
        { "livros": livros },
        { "filmes": filmes },
        { "series": series },
        { "animes": animes },
        { "desenhos": desenhos },
    );


    array.forEach(categorias => {
        res.render('notes/all-notes', { categorias });
    })
}

noteCrlt.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id)
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