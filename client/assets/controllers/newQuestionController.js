app.controller('newQuestionController', function($scope, qaFactory, $location) {
	$scope.newQuestion = {}
	$scope.createQuestion = function() {
		$scope.newQuestion.likes = 0;
		qaFactory.createQuestion($scope.newQuestion).then(function(data){
			if('error' in data) {
				$scope.errors = data.error.errors.question.message;
				console.log($scope.errors);
			} else {
				$location.url('/dashboard');
			}
		}) 
	}
})