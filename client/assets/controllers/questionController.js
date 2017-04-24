app.controller('questionController', function($scope, qaFactory, $routeParams) {
	var getQuestion = function() {
		qaFactory.getQuestion($routeParams.id).then(function(data) {
			$scope.question = data;
			$scope.answers = $scope.question.answers;
			console.log($scope.question);
			console.log($scope.answers);
		})
	}

	getQuestion();
	console.log($scope.question);
	console.log($scope.answers);

	$scope.like = function(id) {
		console.log('liking');
		qaFactory.likeAnswer(id).then(function() {
			getQuestion();
		})
	}
})