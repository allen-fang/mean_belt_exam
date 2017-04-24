app.controller('newAnswerController', function($scope, qaFactory, $location, $routeParams) {
	qaFactory.getQuestion($routeParams.id).then(function(data) {
		$scope.question = data;
	})

	$scope.newAnswer = {};
	$scope.newAnswer.user = "";

	$scope.createAnswer = function() {
		console.log("creating answer")
		$scope.newAnswer.user = qaFactory.user;
		$scope.newAnswer.likes = 0;
		qaFactory.createAnswer($scope.newAnswer, $routeParams.id).then(function(data) {
			console.log(data);
			if('errors' in data) {
				$scope.errors = data.errors.answer.message;
			} else {
				$location.url('/dashboard');
			}
		})
	}

})