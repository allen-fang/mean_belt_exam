var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

// connects to mongo db called 'mean_friends_db'
mongoose.connect('mongodb://localhost/belt_exam_db');


// reads the models schemas (models folder files)
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') >= 0) {
		require(models_path + '/' + file);
	}
})