'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API HORE", res)  
};


//menampilkan data user
exports.getAllUser = function(req, res){
    connection.query("SELECT * FROM USERS", function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//select all data user berdasar id
exports.getAllUserbyId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM USERS WHERE id_user = ?", [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
        });
    
};

//menambah data user
exports.postUser = function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    var photo = req.body.photo;

    connection.query("INSERT INTO USERS(email, password, photo) VALUES(?, ?, ?)", [email, password, photo],
        function (error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil menambah data user", res);
            }
        });
};

//ubah data user berdasar id
exports.editUser = function(req, res){
    var id_user = req.body.id_user;
    var email = req.body.email;
    var password = req.body.password;
    var photo = req.body.photo;

    connection.query("UPDATE USERS SET email=?, password=?, photo=? WHERE id_user=?", [email, password, photo, id_user],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data berhasil diedit", res)
            }
        });
};

//delete data user berdasar id
exports.deleteUser = function(req, res){
    var id_user = req.body.id_user;

    connection.query("DELETE FROM USERS WHERE id_user=?", [id_user],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data id_user = " + id_user+ " berhasil didelete", res)
            }
        });
};

//menampilkan nested users
exports.usersNested = function(req, res){


}