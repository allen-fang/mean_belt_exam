var questions = require('./../controllers/question.js');
var answers = require(('./../controllers/answer.js'));

module.exports = function(app) {

	// QUESTIONS ROUTES
	app.get('/questions', questions.index);
	app.get('/questions/:id', questions.show);
	app.post('/questions', questions.create);

	// ANSWER ROUTES
	app.post('/answers/:id', answers.create);
	app.post('/like/:id', answers.like);
}