/**
 * Created by dieffrei on 06/06/17.
 */
'use strict';

angular.module('br.com.cmanager.vehicle')

    .service('VehicleService', ['$http', '$q', '$timeout', function($http, $q, $timeout) {

        var END_POINT = 'https://radiant-ridge-60719.herokuapp.com';

        return {

            getAllVehicles : function(){
                var defered = $q.defer();
                $http({
                    method: 'GET',
                    url: END_POINT + '/car'
                }).then(function(carList){
                    console.log(carList);
                    defered.resolve(carList);
                }, function(err){
                    defered.reject(err);
                });
                return defered.promise;
            },

            getByPlate : function(plate){
                var defered = $q.defer();
                $http({
                    method: 'GET',
                    url: END_POINT + '/car/' + plate
                }).then(function(carList){
                    console.log(carList);
                    defered.resolve(carList);
                }, function(err){
                    defered.reject(err);
                });
                return defered.promise;
            },


            saveVehicle: function(vehicle) {
                console.log('saveVehicle()', vehicle);
                var defered = $q.defer();
                $http({
                    method: 'POST',
                    url: END_POINT + '/car/' + vehicle.plate,
                    data: vehicle
                }).then(function(carList){
                    console.log(carList);
                    defered.resolve(carList);
                }, function(err){
                    defered.reject(err);
                });
                return defered.promise;
            }

        }

    }]);