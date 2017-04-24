app.controller('loginController', function($scope, qaFactory, $location) {

	$scope.login = function() {
		qaFactory.login($scope.user, function() {
			$location.url('/dashboard')
		})
	}
})