// Routing | ExpressJS
var express = require('express');
var app = express();
var fs = require('fs');
var formidable = require("formidable");

// Model
var user_instance = require('api/model/user.js');

/*
var folder_instance = require('api/model/folder.js');
var playlist_instance = require('api/model/playlist.js');

// extends.
var contents_instance = require('api/model/extends/contents.js');
var db_instance = require('api/model/extends/db.js');
var id_dad_instance = require('api/model/extends/id_dad.js');
var name_instance = require('api/model/extends/name.js');
*/

// <SCRIPT>

// User | Register
app.post('api/controller/user_tool.js', function(req, res) {
    var user = new user_instance();
    var form = new formidable.IncomingForm();

    if(req.query.id !== undefined) {
        form.parse(req, function(err, name, email, passwd) {

            var upload = new user(req.query.id, name, email, passwd);

            upload.upload(upload.user, function(succes) {
                if(succes) {
                    res.send("Welcome, user create ^^");
                } else {
                    console.log(succes);
                }
            });
        });
    }
});
app.listen(8080);
