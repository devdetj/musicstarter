var MongoClient = require('mongodb').MongoClient;

class db{
    insert(clt,data,callback){

        MongoClient.connect("mongodb://localhost:27017/musicstarter", function(err, db) {
            if (err) {

                console.error(err);
            }
            db.collection(clt).insert(data,function(err2, docs) {

                if (err2) {

                    console.error(err2);

                }
                if(docs.ops[0] !== undefined) {

                    callback(docs.ops[0]);

                }else {

                    callback(false);
                }
            });

        });
    }
    remove(clt,data,callback){
        MongoClient.connect("mongodb://localhost:27017/musicstarter", function(err, db) {

            if (err) {

                console.error(err);
            }

            db.collection(clt).remove(data,function(err2, docs) {

                if (err2) {

                    console.error(err2);

                }
                callback(docs);
            });
        });
    }
    find(clt,data,callback){
        MongoClient.connect("mongodb://localhost:27017/musicstarter", function(err, db) {

            if (err) {

                console.error(err);
            }

            db.collection(clt).find(data,function(err2, docs) {

                if (err2) {

                    console.error(err2);

                }
                callback(docs);
            });
        });
    }
}

module.exports = db;
