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

const {isAuthenticated} = require('../help/auth')
// new notes
router.get('/notes/add',isAuthenticated, renderNoteForm);
router.post('/notes/new-note', createNewNote);

// get All notes
router.get('/notes/all-notes',isAuthenticated,renderNote)

//editar notes
router.get('/notes/edit/:id',isAuthenticated,renderEditForm)
router.put('/notes/edit/:id',isAuthenticated,updateNote)

//delete notes
router.delete('/notes/delete/:id',isAuthenticated,deleteNote)

module.exports = router;