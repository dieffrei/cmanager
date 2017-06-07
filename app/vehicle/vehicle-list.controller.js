/**
 * Created by dieffrei on 06/06/17.
 */
angular.module('br.com.cmanager.vehicle')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/vehicle', {
            templateUrl: 'vehicle/partial/vehicle-list.html',
            controller: 'VehicleListCtrl'
        });
    }])
    .controller('VehicleListCtrl', ['$scope','VehicleService', function($scope, VehicleService) {
        
        $scope.vehicles = VehicleService.getAllCars();
        $scope.isFormVisible = false;
        $scope.vehicle = null;

        $scope.addNewVehicle = function(){
            resetFields();
            openForm();
        };

        $scope.cancel = function(){
            closeForm();
            resetFields();
        };

        $scope.save = function(){
            $scope.vehicles.push($scope.vehicle);
            closeForm();
        };

        function closeForm(){
            $scope.isFormVisible = false;
        }

        function openForm(){
            $scope.isFormVisible = true;
        }

        function resetFields(){
            $scope.vehicle = new CManager.Vehicle();
        }
        
    }]);