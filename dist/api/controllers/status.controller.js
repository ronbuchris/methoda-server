"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class StatusController {
    constructor() {
        this.router = express.Router();
        console.log('routes', 2);
        this.initializeRoutes();
    }
    initializeRoutes() {
        console.log('routes', 3);
        this.router.get('/', this.getAllStatuses);
        this.router.post('/', this.createStatus);
        this.router.delete('/:statusId', this.deleteStatus);
    }
    async getAllStatuses(request, response, next) {
        try {
            console.log('get in');
        }
        catch (err) {
        }
    }
    async createStatus(request, response, next) {
        try {
        }
        catch (err) {
            next(err);
        }
    }
    async deleteStatus(request, response, next) {
        try {
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = StatusController;
//# sourceMappingURL=status.controller.js.map