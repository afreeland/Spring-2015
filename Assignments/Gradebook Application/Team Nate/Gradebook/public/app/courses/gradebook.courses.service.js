angular.module('Gradebook.Courses.Service', [])

.factory('Course', function ($http) {
	var Course = {};

	Course.pushAssignment = function (course_id, assignment_id) {
		return $http.put('/api/courses/' + course_id + '/assignments/' + assignment_id);
	};

	Course.getAllStudents = function () {
		return $http.get('/api/students');
	};

	return Course;
});