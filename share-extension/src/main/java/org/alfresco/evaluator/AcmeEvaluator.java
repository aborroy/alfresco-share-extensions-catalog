package org.alfresco.evaluator;

import org.alfresco.web.evaluator.BaseEvaluator;
import org.json.simple.JSONObject;

/**
 * Despite invoking a repo service from this Evaluator is possible, is highly discouraged.
 * Sample implementation on invoking a repo service is available in:
 * <a href="https://github.com/Alfresco/alfresco-community-share/blob/master/web-framework-commons/src/main/java/org/alfresco/web/config/forms/ServiceBasedEvaluator.java">ServiceBasedEvaluator.java</a>
 */
public class AcmeEvaluator extends BaseEvaluator {

    public static final String ACME_DOCUMENT_TYPE = "acme:document";

    /**
     * Evaluator built using Node Properties available as JSONObject:
     * <pre>
     * {
     *   "node": {
     *     "type": "acme:document",
     *     "aspects": [...],
     *     "nodeRef": "workspace://SpacesStore/106ded8e-272e-47f6-9694-a084eb363288",
     *     "permissions": {...},
     *     "properties": {...},
     *   "parent": {...},
     *   "fileName": "Sample-Document.docx",
     *   "displayName": "Sample-Document.docx",
     *   "location": {...},
     * }
     * </pre>
     *
     * Additional information available in
     * <a href="https://docs.alfresco.com/content-services/latest/develop/reference/share-document-library-ref/">share-document-library-ref</a>
     *
     * @param jsonObject The object the evaluation is for
     * @return boolean indicating evaluator result
     */
    @Override
    public boolean evaluate(JSONObject jsonObject) {
        return getNodeType(jsonObject).equals(ACME_DOCUMENT_TYPE);
    }

}