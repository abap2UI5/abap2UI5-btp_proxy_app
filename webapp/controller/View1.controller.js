sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/BusyIndicator", "sap/ui/core/mvc/View", "sap/m/MessageBox"],
    function (Controller, BusyIndicator, XMLView, MessageBox) {
        "use strict";

        return Controller.extend("zabap2ui5.controller.View1", {
            onInit() {
                BusyIndicator.show();
            },

            async onAfterRendering() {
                try {
                    this.initializePathname();
                    this.setParentComponent();
                    this.setAppStartParameter();
                    let response = await this.GetHTTP();
                    this.displayView(response);
                } catch (e) {
                    MessageBox.error(e.toLocaleString());
                }
            },

            initializePathname() {
                sap.z2ui5 = {};
                sap.z2ui5.pathname = this.getView().getModel().sServiceUrl + "/";
            },

            setParentComponent() {
                try {
                    sap.z2ui5.oParent = this.getView().getParent();
                    if (sap.z2ui5.oParent.getMetadata().getName() !== 'sap.m.App') {
                        sap.z2ui5.oParent = this.getDefaultParent();
                    }
                } catch (error) {
                    sap.z2ui5.oParent = this.getView().byId(this.getView().getId() + "--app");
                }
            },

            setAppStartParameter() {
                try {
                    sap.z2ui5.APP_START = this.getOwnerComponent().getComponentData().startupParameters.app_start[0];
                } catch (e) {
                }
            },

            async GetHTTP() {
                const response = await fetch(sap.z2ui5.pathname, { method : "GET" , headers : { "Content-Type" : "application/html" } });
                if (!response.ok) {
                    const errorText = await response.text();
                    MessageBox.error(errorText);
                }
                return response.text();
            },

            async displayView(data) {
                let code = data.split('<abc/>')[1];
                let xml = `<mvc:View xmlns='http://www.w3.org/1999/xhtml' xmlns:mvc='sap.ui.core.mvc'>${code}</mvc:View>`;
                const oView = await XMLView.create({
                    type: 'XML',
                    definition: xml,
                    controller: new Controller
                });
                sap.z2ui5.oParent.removeAllPages();
                sap.z2ui5.oParent.insertPage(oView);
                sap.z2ui5.oView = oView;
            },
        });
    });
