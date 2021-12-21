var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:root@crud-shard-00-00.3au7w.mongodb.net:27017,crud-shard-00-01.3au7w.mongodb.net:27017,crud-shard-00-02.3au7w.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-38kfii-shard-0&authSource=admin&retryWrites=true&w=majority";


//deleting feedback: Other using method remove

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("myFirstDatabase");
  /*Delete the first customers with the address "Mountain 21":*/
  var myquery = { feedback: 'Other' };
  dbo.collection("votes").remove(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
