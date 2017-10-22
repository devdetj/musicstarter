var db = require('./extends/db.js');

module.exports.register = function (name,passwd,email,callback){
    var dbs = new db();
    dbs.insert('user',{ name:name, passwd:passwd, email:email }, function(success){

        callback(success);
        dbs = null;

    });
    dbs = null;

};

module.exports.remove = function (name,passwd,email, callback){
    var dbs = new db();
    dbs.remove('user',{name:name,passwd:passwd,email:email}, function(success){

        callback(success);
        dbs = null;

    });
    dbs = null;

};
module.exports.login = function (name,passwd,callback){
    var dbs = new db();
    dbs.find('user',{name:name,passwd:passwd},function(user){

        callback(user);
        dbs = null;
    });
    dbs = null;
};




