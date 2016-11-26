angular.module('app').controller('ViewController', function($scope, $http, $location, $routeParams) {
    $scope.title = "View Contact";

    var id = $routeParams.id;
    $http.get('/tips/' + id).success(function(data) {
        $scope.tip = data;
    }).error(function(status) {
        console.log('Error: ' + status);
    });

    $scope.delete = function() {
        $http.delete('/tips/' + id).success(function(data){
            $scope.tip = data;
            $location.path('/list');
            toastr.success('Contact deleted successfully!');
        }).error(function(status) {
            toastr.warning('Please try again after sometime!');
            console.log('Error: ' + status);
        });

        $('.modal-backdrop').hide();
    };

    $scope.edit = function() {
        $location.path('/edit/' + id);
    }
});