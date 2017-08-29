sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/m/Popover',
		'sap/m/Button',
		"sap/ui/core/UIComponent",
		'sap/m/MessageToast'
	], function(jQuery, Controller, Popover, Button , UIComponent ,MessageToast) {
	"use strict";
    
	Controller.extend("test1.controller.View1", {
 
		onInit: function () {

		},

		onCollapseExapandPress: function () {
			var sideNavigation = this.getView().byId('sideNavigation');
			var expanded = !sideNavigation.getExpanded();
 
			sideNavigation.setExpanded(expanded);
		},
        onListPress: function() {
        	
        	var oRouter = UIComponent.getRouterFor(this);
        	MessageToast.show(oRouter+" Pressed"); //方法被触发了
            oRouter.navTo("Page",{},true);
        }
		
	});
 
 
	return Controller;
 
});