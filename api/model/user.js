var name = require('./extends/name.js');

class pre_user extends name{

    constructor(name,passwd,email){

        super(name);
        this.passwd=passwd;
        this.email=email;

    }

}

class user extends pre_user{

    constructor(name,passwd,email){

        super(name,passwd,email);

    }

}

module.exports = user;
