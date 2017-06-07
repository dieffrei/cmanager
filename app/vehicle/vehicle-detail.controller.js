/**
 * Created by dieffrei on 06/06/17.
 */
angular.module('br.com.cmanager.vehicle')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/vehicle/:vehicleId', {
            templateUrl: 'vehicle/partial/vehicle-edit.html',
            controller: 'VehicleDetailCtrl'
        });
    }])
    .controller('VehicleDetailCtrl', ['$scope','VehicleService', function($scope, VehicleService) {

        $scope.vehicle = new CManager.Vehicle('MXR-3495', 'MR-2', '2018', 'Mercedes', 'Caminhão');

    }]);