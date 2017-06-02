var config = {}

config.host = process.env.HOST || "https://hekaton-dzikie.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "we5wJ6oqJiCRWeiKzMfQqm9gpPI0vCVCf2hCVueTLuDh1EHHtNt1vhUEqc1Js1JR4XAQV8ySKbXh2OFFjptnxA==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;