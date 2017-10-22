var id_dad = require('./id_dad.js');
class contents extends id_dad{

    constructor(id_dad,name,contents){

        super(id_dad,name);
        this.contents=contents;

    }

}
module.exports=contents;
