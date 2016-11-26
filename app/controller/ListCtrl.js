angular.module('app').controller('ListController', function($scope, $http, $location) {
    $scope.title = "Tips List";

    $http.get('/tips').success(function(data) {
        $scope.tips = data;
    }).error(function(status) {
        console.log('Error: ' + status);
    });

    $scope.sortKey = "-_id";
    $scope.sort = function(keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };

    $scope.view = function(id) {
        $location.path('/view/' + id);
    };
});