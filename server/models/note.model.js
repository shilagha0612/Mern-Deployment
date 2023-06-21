const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'Title must contain 2 character'],
        unique: [true, 'Title must be unique']
        
    },
    body: {
        type: String,
        required: [true, 'Body is required'],
        minlength: [3, 'Body must be at least 3 characters long'],
        maxLength:[255,"must contain 255 Character"  ]
    },
    
    
}, { timestamps: true });
module.exports.Note = mongoose.model('Note', NoteSchema);
