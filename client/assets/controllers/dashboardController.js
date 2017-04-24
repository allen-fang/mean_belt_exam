app.controller('dashboardController', function($scope, qaFactory) {
	$scope.user = qaFactory.user;

	qaFactory.getQuestions().then(function(data) {
		$scope.questions = data;
	})

})