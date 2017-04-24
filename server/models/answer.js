var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
	answer: {type: String, required: true, minlength: [5, 'Must be more than 5 characters long.']},
	description: {type: String},
	user: {type: String},
	likes: {type: Number},
	_question: {type: Schema.Types.ObjectId, ref: 'Question'}
}, {timestamps: true});

var Answer = mongoose.model('Answer', AnswerSchema);