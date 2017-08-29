sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"test1/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("test1.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
            // app view(root view)
            // var oAppView = sap.ui.view("appView", {
            //     type: sap.ui.core.mvc.ViewType.XML,
            //     viewName: "test1.view.App"
            // });

            // oApp = oAppView.byId("app");
            // return oAppView;   
		}
	});

});