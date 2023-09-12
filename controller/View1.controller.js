sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("starting.controller.View1", {
            onInit: function () {

            },
            
            ohandle_press: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("detail");
            }
        });
    });
