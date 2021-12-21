var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:root@crud-shard-00-00.3au7w.mongodb.net:27017,crud-shard-00-01.3au7w.mongodb.net:27017,crud-shard-00-02.3au7w.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-38kfii-shard-0&authSource=admin&retryWrites=true&w=majority";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("myFirstDatabase");
  //Delete the "customers" collection:
  dbo.dropCollection("votes", function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
       //alert("Votes collection deleted");
    
    db.close();
  });
});






