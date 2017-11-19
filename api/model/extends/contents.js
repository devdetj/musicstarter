var name = require('./name.js');
class contents extends name{

    constructor(name){

        super(name);
        this.contents = new Array({});

    }

    async get_content_audio(contents){
        return await this.get_content('audio',contents);
    }
    async get_content_playlist(contents) {
        return await this.get_content('playlist',contents);
    }
    async get_content_folder(contents) {
        return await this.get_content('folder',contents);
    }
    async get_content(where, contents){

        return await this.dbs.collection( where ).find({ _id : {$in : contents}}).toArray();

    }
}
module.exports=contents;
