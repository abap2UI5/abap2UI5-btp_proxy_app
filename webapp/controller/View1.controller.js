sap.ui.define([
  "sap/ui/core/mvc/Controller"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("zabap2ui5.controller.View1", {
      onInit: function () {
        sap.ui.core.BusyIndicator.show();
      },

      onAfterRendering: function () {

        sap.z2ui5 = {};
        sap.z2ui5.pathname = this.getView().getModel().sServiceUrl;
        //i will never understand the / magic
        sap.z2ui5.pathname += `/`;
        try {
          sap.z2ui5.oParent = this.oView.getParent();
          if (sap.z2ui5.oParent.getMetadata().getName() !== 'sap.m.App') {
            sap.z2ui5.oParent = this.getView().byId(this.getView().getId() + "--app");
          }
        } catch (error) {
          sap.z2ui5.oParent = this.getView().byId(this.getView().getId() + "--app");
        }
        try {
          sap.z2ui5.APP_START = this.getOwnerComponent().getComponentData().startupParameters.app_start[0];
        } catch (e) { }

        jQuery.ajax({
          url: sap.z2ui5.pathname,
          type: "GET",
          dataType: "text",
          data: "",
          async: true,
          contentType: "text/html; charset=utf-8",
          success: function (data, a, s) {
            let code = data.split('<abc/>')[1];
            sap.ui.controller("z2ui5_dummy_controller", {});
            let xml =
              "<mvc:View controllerName='z2ui5_dummy_controller' xmlns='http://www.w3.org/1999/xhtml' xmlns:mvc='sap.ui.core.mvc' >" +
              code + "</mvc:View>";
            new sap.ui.core.mvc.View.create({
              type: 'XML',
              definition: xml,
            }).then(oView => {
              sap.z2ui5.oParent.removeAllPages();
              sap.z2ui5.oParent.insertPage(oView);
              sap.z2ui5.oView = oView;
            });
          }
        })

      },
    });
  });                                                                                                                                                                                                                                                          