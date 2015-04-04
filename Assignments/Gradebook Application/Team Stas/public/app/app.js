//name our angular app
angular.module('gradebookApp', 
	['ngAnimate', 'app.routes','authService','mainCtrl','userCtrl','userService','classCtrl', 'classService'])

.config(function($httpProvider) {

	// attach our auth interceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');

});