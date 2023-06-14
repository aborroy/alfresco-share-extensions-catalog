(function () {
    YAHOO.Bubbling.fire("registerRenderer",
        {
            propertyName: "acmeDocumentIdCustomRendition",
            renderer: function acmeDocumentId_renderer(record, label) {
                var jsNode = record.jsNode,
                    properties = jsNode.properties,
                    html = "";
                var acmeDocId = properties["acme:documentId"] || "";
                html = '<span>' + label + acmeDocId + '</span>';

                return html;
            }
        });
})();

(function () {
    YAHOO.Bubbling.fire("registerRenderer",
        {
            propertyName: "strictlyConfidential",
            renderer: function strictlyConfidential_renderer(record, label) {
                return 'This document is STRICTLY CONFIDENTIAL (!)';
            }
        });
})();