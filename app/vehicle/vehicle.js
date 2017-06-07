/**
 * Created by dieffrei on 06/06/17.
 */

CManager.Vehicle = (function(){

    function Vehicle(plate, model, year, brand, type, marketPrice){
        this.plate = plate;
        this.model = model;
        this.year = year;
        this.brand = brand;
        this.type = type;
        this.marketPrice = marketPrice;
    }

    return Vehicle;

})();