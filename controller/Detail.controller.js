
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("starting.controller.Detail", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("detail").attachMatched(this._onRouteMatched,this);
            },
            

            _onRouteMatched: function(oEvent) {
                var oParameters = oEvent.getParameters().arguments.params;
                console.log(oParameters);

    var decodedParams = decodeURIComponent(oParameters);
    console.log(decodedParams);

    var oSelectedProduct = {};

    // Split the parameters and extract key-value pairs
    var paramPairs = decodedParams.split(',');
    console.log("3 : "+ paramPairs);

    paramPairs.forEach(function(paramPair) {
        var keyValue = paramPair.split('=');
        oSelectedProduct[keyValue[0]] = keyValue[1];
        console.log("4 :" + paramPairs);

    });
 // Create a JSON model and set the data
 var oModel = new JSONModel(oSelectedProduct);
 this.getView().setModel(oModel, "selectedProductModel");
}
    ,
                 
            oNavButton_press: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("home");
                
            }
        });
    });
