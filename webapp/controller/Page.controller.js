sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		"sap/ui/core/UIComponent",
		"sap/ui/core/routing/History"
	], function(jQuery, Controller , UIComponent ,History) {
	"use strict";
    
	Controller.extend("test1.controller.Page", {
 
		onInit: function () {

		},
		
		onNavPress: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			
			if (sPreviousHash !== undefined){
				window.history.go(-1);
			}else{
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("View1",{}, true);
			}
		}
		
	});
 
 
	return Controller;
 
});