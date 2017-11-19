let contents = require('./extends/contents.js');
let db = require('./extends/db.js');

class user extends contents{

    constructor(name,passwd,register){
        super(name);

        this.passwd = passwd;

        if(register){

            this.email=register;

        }
    }

    async login(){

        let dbs = new db("mongodb://localhost:27017/musicstarter");
        dbs = await dbs.get_connect();

        let docs =  await dbs.collection('user').findOne({

            name:this.name,
            passwd:this.passwd

        });
        this.dbs = dbs;
        return docs;
    }

}

module.exports = user;
