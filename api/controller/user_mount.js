var collections = ['audio','folder','playlist'];
var pickup_tools = require('./../controller/folder_playlist_audio_tool.js');

function pickup(id_dad,collection,callback){

        pickup_tools.get_data(id_dad, collection, function (data, collection) {

            if (data[0]._id != undefined) {

                callback(data, collection);

            } else {

                callback(false);

            }
        });

}

function arr(id_dad,collections,callback){

    pickup(id_dad, collections,function(data,collection){

        if(collection == 'audio'){

            callback(data,'audio',collection);

        }else {

            for (var i = 0; data.length; i++){
                if(data[i]) {
                    pickup(data[i].id_dad, collections, function (data, collection) {

                        callback(data[i], name, collection);

                    });
                }else{

                    callback('empty','empty','empty');

                }

            }
        }

    })

}

function control_universe(id_dad,collections,callback){

    arr(id_dad,collections,function (data, name, collection) {

        if (collection === 'audio'){

            callback(data,false);

        }else if(collection === 'playlist' || collection ==='folder'){

            control_universe(data.id_dad,collections,function(data){

                callback(data,true);

            });
        }

    })

}

for (var i = 0; i < collections.length;i++) {

    control_universe('59ebe98ac1118f15cceb062c', collections[1], function (data, name) {

        console.log(data);

    });
}

