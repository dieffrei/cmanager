/**
 * Created by dieffrei on 06/06/17.
 */
'use strict';

angular.module('br.com.cmanager.vehicle')

    .service('VehicleService', ['$http', '$q', '$timeout', function($http, $q, $timeout) {

        var END_POINT = 'https://floating-mesa-19320.herokuapp.com';

        return {

            getAllCars : function(){
                
                return [
                    new CManager.Vehicle('MHX-1148', '207', '2018', 'Peugeot'),
                    new CManager.Vehicle('XRT-3800', 'UNO', '2010', 'Fiat'),
                    new CManager.Vehicle('ITA-0300', 'F120', '2016', 'Ferrari')
                ];
                
                /*
                var defered = $q.defer();

                $timeout(function(){
                    console.log('timeout()');
                    defered.resolve([
                        new CManager.Car(),
                        new CManager.Car(),
                        new CManager.Car(),
                        new CManager.Car(),
                        new CManager.Car(),
                        new CManager.Car(),
                        new CManager.Car()
                    ])
                }, 1000 * 2);

                /*$http({
                    method: 'GET',
                    url: END_POINT + '/car'
                }).then(function(carList){
                    console.log(carList);
                    defered.resolve(carList);
                }, function(err){
                    defered.reject(err);
                });*/
                //return defered.promise;
            }

        }

    }]);