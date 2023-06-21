const noteController = require('../controller/note.controller');

module.exports = app => {
   
    app.post('/api/note', noteController.createNote);
    app.get('/api/notes', noteController.getAllNotes);
    app.get('/api/note/:id', noteController.getNote);
    app.patch('/api/note/:id', noteController.updateNote);
    app.delete('/api/note/:id', noteController.deleteNote);
    

}

