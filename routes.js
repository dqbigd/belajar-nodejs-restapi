'use strict';

module.exports = function (app) {
    var controller = require('./controller');

    app.route('/')
        .get(controller.index);

    app.route('/tampil')
        .get(controller.getAllUser);

    app.route('/tampil/:id')
        .get(controller.getAllUserbyId);

    app.route('/tambah')
        .post(controller.postUser);

    app.route('/edit')
        .put(controller.editUser);

    app.route('/hapus')
        .delete(controller.deleteUser);

    app.route('/tampilfollower')
        .get(controller.usersNested);
}