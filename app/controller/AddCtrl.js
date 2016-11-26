angular.module('app').controller('AddController', function($scope, $http, $location) {
    $scope.title = "Add Tip";

    $scope.save = function() {
        $http.post('/tips', $scope.tip).success(function(data) {
            $scope.tip = data;
            $location.path('/list');
            toastr.success('Contact added successfully!');
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