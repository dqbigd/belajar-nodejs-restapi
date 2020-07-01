'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

     res.json(data);
     res.end();
};

//response nested matakuliah
exports.oknested = function(values, res){
    //akumulasi
    const hasil = values.reduce((akumulasikan, item) =>{
        //tentukan key group
        if(akumulasikan[item.email]){
            //variable group email user
            const group = akumulasikan[item.email];
            //cek isi array adalah ibadah
            if(Array.isArray(group.nama)){
                //tambahkan value ke group
                group.nama.push(item.nama);
            }else{
                group.nama = [group.nama, item.nama];
            }
        }else{
            akumulasikan[item.email] = item;
        }
        return akumulasikan;
    },{});

    var data = {
        'status':200,
        'values':hasil
    };

     res.json(data);
     res.end();
}

