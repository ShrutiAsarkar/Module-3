'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const ItemController =  require('./controllers/prod.controller');
const MongoDBUrl = 'mongodb://localhost:27017/itemapi';

const server = new Hapi.Server({
    port: 3001,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/items',
    handler: ItemController.list
});

server.route({
    method: 'GET',
    path: '/items/{id}',
    handler: ItemController.get
});
server.route({
    method: 'POST',
    path: '/items',
    handler: ItemController.create
});

server.route({
    method: 'PUT',
    path: '/items/{id}',
    handler: ItemController.update
});

server.route({
    method: 'DELETE',
    path: '/items/{id}',
    handler: ItemController.remove
});

(async () => {
    try {
        await server.start();
        // Once started, connect to Mongo through Mongoose
        mongoose.connect(MongoDBUrl, {}).then(() => {
            console.log(`Connected to Mongo server`)},
                err => {
            console.log(err)
        });
        console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {
        console.log(err)
    }
})
();