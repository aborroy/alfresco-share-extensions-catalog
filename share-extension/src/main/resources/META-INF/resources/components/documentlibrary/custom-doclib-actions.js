(function () {
    YAHOO.Bubbling.fire("registerAction",
        {
            actionName: "onShowCustomMessage",
            fn: function org_alfresco_onShowCustomMessage(file) {

                Alfresco.util.Ajax.request(
                {
                    method: Alfresco.util.Ajax.GET,
                    // Invoke Share WebScript "get-user.get.js"
                    url: Alfresco.constants.URL_SERVICECONTEXT + 'user?userId=' + Alfresco.constants.USERNAME,
                    requestContentType: Alfresco.util.Ajax.JSON,
                    successCallback:
                    {
                        fn: function onRequestSuccess(response)
                        {
                           var username = response.serverResponse.responseText;
                           Alfresco.util.PopupManager.displayMessage(
                           {
                               text: this.msg("doclib.action.showCustomMessage.text", file.displayName, username)
                           })
                        },
                        scope: this
                    },
                    failureCallback:
                    {
                         fn: function onRequestFailure()
                         {
                             Alfresco.util.PopupManager.displayMessage(
                             {
                                 text: this.msg("User name was not recovered")
                             })
                         },
                         scope: this
                    }
                });
            }
        });
})();