app.factory('qaFactory', function($http) {
	var factory = {};
	factory.user = "";

	factory.login = function(name, callback) {
		factory.user = name;
		callback();
	}

	// QUESTION METHODS
	factory.getQuestions = function() {
		return $http.get('/questions').then(function(res) {
			return res.data;
		})
	}

	factory.getQuestion = function(id) {
		return $http.get('/questions/' + id).then(function(res) {
			return res.data;
		})
	}

	factory.createQuestion = function(newQuestion) {
		return $http.post('/questions', newQuestion).then(function(res) {
			if('error' in res.data) {
				console.log(res.data.error);
				return res.data;
			} else {
				return res.data;
			}
		})
	}

	// ANSWER METHODS
	factory.createAnswer = function(newAnswer, id) {
		return $http.post('/answers/' + id, newAnswer).then(function(res) {
			if('error' in res.data) {
				console.log(res.data.error);
				return res.data.error;
			} else {
				return res.data;
			}
		})
	}

	factory.likeAnswer = function(id) {
		return $http.post('/like/' + id).then(function(res) {
			return res.data;
		})
	}

	return factory;
})