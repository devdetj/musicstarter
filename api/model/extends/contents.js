var name = require('./name.js');
class contents extends name{

    constructor(name){

        super(name);
        this.contents={

            audio:[],
            folder:[],
            playlist:[]

        }
    }
}
module.exports=contents;
