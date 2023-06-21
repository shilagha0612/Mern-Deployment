const {Note} = require('../models/note.model');


  module.exports.createNote = (req, res) => {
    const {title, body} = req.body;
    Note.create({ title,body})
      .then(note => res.json(note))
      .catch(err => res.status(400).json(err));
  };

module.exports.getAllNotes = (request, response) => {
  Note.find({})
    .then(notes => response.json(notes))
    .catch(err => response.json(err));
};

module.exports.getNote = (request, response) => {
  Note.findOne({_id:request.params.id})
      .then(note => response.json(note))
      .catch(err => response.json(err))
}

module.exports.updateNote = (request, response) => {
  Note.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
      .then(updatedNote => response.json(updatedNote))
      .catch(err => response.status(400).json(err))
}


module.exports.deleteNote = (request, response) => {
  Note.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}


