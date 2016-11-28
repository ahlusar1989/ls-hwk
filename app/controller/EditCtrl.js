angular.module('app').controller('EditController', function($scope, $http, $location, $routeParams) {
    $scope.title = "Edit Tip";

    var id = $routeParams.id;
    $http.get('/tips/' + id).success(function(data) {
        $scope.tip = data;
    }).error(function(status) {
        console.log('Error: ' + status);
    });

    $scope.cancel = function() {
        $location.path('/view/' + id);
    };

    $scope.update = function() {
        $http.put('/tips/' + $scope.tip._id, $scope.tip).success(function(data) {
            $scope.tip = data;
            $location.path('/list');
            toastr.success('Tip updated successfully!');
        }).error(function(status) {
            toastr.warning('Wrongly entered. Please check!');
            console.log('Error: ' + status);
        });
    };

    $scope.noSpace = function() {
        $scope.tip.username = $scope.tip.username.split(' ').join('');
        $scope.tip.message = $scope.tip.message.split(' ').join('');
    };

});