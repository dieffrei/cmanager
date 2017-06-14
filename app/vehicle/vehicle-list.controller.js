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
        
        $scope.vehicles = [];
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
            VehicleService.saveVehicle($scope.vehicle);
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
        
        function loadVehicles(){
            VehicleService.getAllVehicles().then(function(result){
                console.log('loadVehicles()', result);
                $scope.vehicles = [];
                _.each(result.data, function(v){
                    $scope.vehicles.push(new CManager.Vehicle(v.Plate, v.Model, v.Year, v.Brand));
                })
            })
        }
        
        function init(){
            loadVehicles();
        }

        init();
        
    }]);