/**
 * Created by dieffrei on 06/06/17.
 */
angular.module('br.com.cmanager.vehicle')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/vehicle/:plate', {
            templateUrl: 'vehicle/partial/vehicle-edit.html',
            controller: 'VehicleDetailCtrl'
        });
    }])
    .controller('VehicleDetailCtrl', ['$scope','VehicleService', '$routeParams', function($scope, VehicleService, $routeParams) {

        $scope.vehicle = CManager.Vehicle();

        function load(){
            VehicleService.getByPlate($routeParams.plate).then(function(v){
                console.log(v);
                $scope.vehicle = new CManager.Vehicle(v.Plate, v.Model, v.Year, v.Brand);
            })
        }

        function init(){
            load();
        }

        init();

    }]);