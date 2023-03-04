"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const transition_handler_1 = require("../handlers/transition.handler");
class TransitionController {
    constructor() {
        this.router = express.Router();
    }
    initializeRoutes() {
        console.log('3', 3);
        this.router.get('/', this.getAllTransitions);
        this.router.post('/', this.createTransition);
        this.router.delete('/:statusId', this.deleteTransition);
    }
    async getAllTransitions(request, response, next) {
        const transitionHandler = new transition_handler_1.default();
        try {
        }
        catch (err) {
            next(err);
        }
    }
    async createTransition(request, response, next) {
        const transitionHandler = new transition_handler_1.default();
        try {
        }
        catch (err) {
            next(err);
        }
    }
    async deleteTransition(request, response, next) {
        const transitionHandler = new transition_handler_1.default();
        try {
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = TransitionController;
//# sourceMappingURL=transition.controller.js.map