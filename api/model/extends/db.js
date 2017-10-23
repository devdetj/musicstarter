

class db{
    insert(clt,data,callback){
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect("mongodb://localhost:27017/musicstarter", function(err, db) {

            if (err) {

                console.error(err);
                db.close();
            }

            db.collection(clt).insert(data,function(err2, docs) {

                if (err2) {

                    console.error(err2);

                }
                callback(docs);
                db.close();
            });
        });

    }
    remove(clt,data,callback){
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect("mongodb://localhost:27017/musicstarter", function(err, db) {

            if (err) {

                console.error(err);
            }

            db.collection(clt).remove(data,function(err2, docs) {

                if (err2) {

                    console.error(err2);

                }
                callback(docs);
                db.close();
            });
        });
    }
    find(clt,data,callback){
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect("mongodb://localhost:27017/musicstarter", function(err, db) {

            if (err) {

                console.error(err);
                db.close();
            }

            db.collection(clt).find(data).toArray(function(err2, docs) {

                if (err2) {

                    console.error(err2);

                }
                callback(docs);

                db.close();

            });
        });
    }
}

module.exports = db;
