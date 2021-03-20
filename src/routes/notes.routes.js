const { Router } = require('express');
const router = Router();

const {
    renderNoteForm,
    createNewNote,
    renderNote,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controller/note.controller');

// new notes
router.get('/notes/add', renderNoteForm);
router.post('/notes/new-note', createNewNote);

// get All notes
router.get('/notes/all-notes', renderNote)

//editar notes
router.get('/notes/edit/:id', renderEditForm)
router.put('/notes/edit/:id', updateNote)

//delete notes
router.delete('/notes/delete/:id', deleteNote)

module.exports = router;