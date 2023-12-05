sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("zabap2ui5.controller.App", {
        onInit: function() {

          debugger;
          //var a = "sap/bc/srt/scs_ext/sap/journalentrybulkchangerequest_?MessageId=" + this._createUuid();
          var a = "sap/bc/ZTEST";
          jQuery.ajax({
              url: a,
              type: "POST",
              dataType: "text",
              data: "",
              async: true,
              contentType: "text/html; charset=utf-8",
              success: function(t, a, s) {
                  debugger;
                  var dummy = "test";
              },
              error: function(e) {
                debugger;
                var dummy2 = "test";
              }
          })

        }
      });
    }
  );
  