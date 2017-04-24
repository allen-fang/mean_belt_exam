var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: 'loginController'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/question/:id', {
		templateUrl: 'partials/question.html',
		controller: 'questionController'
	})
	.when('/new_question', {
		templateUrl: 'partials/newQuestion.html',
		controller: 'newQuestionController'
	})
	.when('/new_answer/:id', {
		templateUrl: 'partials/newAnswer.html',
		controller: 'newAnswerController'
	})
	.otherwise({
		redirectTo: '/dashboard'
	})
})