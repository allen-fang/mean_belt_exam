var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = {
	create: function(req, res) {
		Question.findOne({_id: req.params.id}, function(err, question) {
			var answer = new Answer(req.body);
			answer._question = question._id;
			answer.save(function(err) {
				if (err) {
					res.json(err);
				} else {
					question.answers.push(answer);
					question.save(function(err) {
						if (err) {
							res.json(err);
						} else {
							res.json({message: "success"});
						}
					})
				}
			})
		})
	},
	like: function(req, res) {
		Answer.findByIdAndUpdate(req.params.id, {$inc: {likes: 1}}, function(err,data) {
			if(err) {
				res.json(err);
			} else {
				res.json(data);
			}
		})
	}
}