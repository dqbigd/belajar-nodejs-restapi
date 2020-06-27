var mysql = require('mysql');

//buat koneksi
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'belajar_node'
});

conn.connect((error)=>{
    if(error) throw error;
    console.log('mysql connected');
});

conn.on('error', function(error) {
    console.log("[mysql error]",error);
  });

module.exports = conn;