sap.ui.controller("viewnavigation.view2", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf viewnavigation.view2
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf viewnavigation.view2
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf viewnavigation.view2
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf viewnavigation.view2
*/
//	onExit: function() {
//
//	}


//creamos el evento al presionar el boton del view2 xml
	onNavigation: function() {

	//	app = sap.ui.getCore().byId("appId");
	//	app.to("idview1");
	
	//iniciamos el router ->cambia el view pero sigue mostrando index.html
		var oRouter = sap.ui.core.routing.Router.getRouter("appRouter");
		var oHashChanger = new sap.ui.core.routing.HashChanger();
		oHashChanger.setHash(oRouter.getURL(""));
		
	}
});