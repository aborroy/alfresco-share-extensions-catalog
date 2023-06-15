// Disable live search for people

// Find Aikau widget
var headerSearch = widgetUtils.findObject(model.jsonModel, "id", "HEADER_SEARCH");
// Modify Aikau widget property
if (headerSearch)
{
  headerSearch.config.showPeopleResults = false;
}