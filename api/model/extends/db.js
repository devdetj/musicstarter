
let MongoClient = require('mongodb').MongoClient;
 class db {

     constructor(url) {
         this.url = url;
     }
     async get_connect() {
         return await MongoClient.connect(this.url);
     }

 }
 module.exports = db;
//module.exports.find = find;
    /*insert(clt,data,callback){
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
        update(clt,mongo_id,data,callback){

        var MongoClient = require('mongodb').MongoClient;

        MongoClient.connect("mongodb://localhost:27017/musicstarter", function(err, db) {

            if (err) {

                console.error(err);
                db.close();
            }

            db.collection(clt).update({_id:mongo_id},{$set:data},function(err2, docs) {

                if (err2) {

                    console.error(err2);

                }
                callback(docs);
                db.close();
            });
        });
    }
     in(clt,data){

       return new Promise(reject=>{
           var MongoClient = require('mongodb').MongoClient;
           MongoClient.connect("mongodb://localhost:27017/musicstarter", function (err, db){

               if(err){

                   console.log(err);

               }
               setTimeout(()=>{
                   console.log({ _id : {$in :  data}});
                   let docs = db.collection( clt ).find({ _id : {$in : data}}).toArray();
                   reject(docs);

               },10000);

           });
       });
    }
    }*/






