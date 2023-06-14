function main() {
      // Invoke Alfresco Repository REST API
      var connector = remote.connect("alfresco-api");
      var result = connector.get("/-default-/public/alfresco/versions/1/people/" + args.userId);
      if (result.status.code == status.STATUS_OK)
      {
         json = JSON.parse(result);
         model.firstName = json['entry']['firstName'];
      }
      return model;
}

main();