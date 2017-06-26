var app = angular.module('studentApp' , []);

app.controller('studentCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.name = "Gaurav1";

	$http.get('json/studentdata.json').then(function(resp){
		$scope.studentData = resp.data;
		console.log("Data Comes from json " + studentData);
	})

	


}]);