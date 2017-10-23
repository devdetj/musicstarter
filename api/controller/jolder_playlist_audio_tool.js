var db = require('./../model/extends/db.js');
module.exports.get_data = function (id_dad,folder_pl_audio,callback) {

    var dbs = new db();

    dbs.find(folder_pl_audio,{ id_dad:id_dad }, function( folder_pl ) {

        callback( folder_pl );
        dbs = null;

    });
    
    dbs = null;

};
module.exports.update = function(id_dad,name,folder_pl_audio,callback){

    var dbs = new db();

    dbs.insert(folder_pl_audio,{ id_dad:id_dad, name:name}, function(success){

        callback(success);
        dbs = null;

    });

    dbs = null;

};

