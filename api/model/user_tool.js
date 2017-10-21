var db = require('./extends/db.js');

module.exports = function register(name,passwd,email,callback){
    var dbs = new db();
    dbs.insert('user',JSON.stringify({ name:name, passwd:passwd, email:email }), function(success){

            callback(success);
            dbs = null;

    });
    dbs = null;

};
module.exports = function remove(user, callback){
  var dbs = new db();
  dbs.remove('user',JSON.stringify(user), function(success){

      callback(success);
      dbs = null;

  });
  dbs = null;

};
module.exports = function login(name,passwd,callback){

    dbs.find('user',JSON.stringify({name:name,passwd:passwd}),function(user){

        callback(user);
        dbs = null;
    });
    dbs = null;
};


