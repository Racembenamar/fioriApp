sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "starting/model/formatter"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,formatter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("starting.controller.List", {
            formatter: formatter,
            onInit: function () {
                var oViewModel = new JSONModel({
                    currency: "EUR"
                });
                this.getView().setModel(oViewModel, "view");
            },
            
		onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
        ohandle_press: function(oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            var oBindingContext = oEvent.getSource().getBindingContext();
            
            // Get the properties from the binding context
            var aProperties = ["CustomerName", "Discount", "OrderID", "ProductID", "ProductName", "Quantity", "Salesperson", "ShipperName", "UnitPrice"];
            var oSelectedProduct = {};
            aProperties.forEach(function(property) {
                oSelectedProduct[property] = oBindingContext.getProperty(property);
            });
        
            // Encode the parameters before passing them in the URL
            var encodedParams = Object.keys(oSelectedProduct).map(function(key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(oSelectedProduct[key]);
            }).join(',');
        
            oRouter.navTo("detail", { params: encodedParams });
            console.log(oSelectedProduct);
        }
        
        
        
        });
    });
