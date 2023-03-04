"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://ronbuchris:9qqpDhqZOJxmZqzS@cluster0.8otc2.mongodb.net/methoda', { retryWrites: true, w: 'majority' });
mongoose.connection.on('connected', function () {
    console.log('Mongoose conected');
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});
//# sourceMappingURL=mongoose-init.js.map