"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transition_service_1 = require("../services/transition.service");
class TransitionHandler {
    async createTransition() {
        try {
            const newTransition = await transition_service_1.TransitionService.createTransition();
        }
        catch (err) {
        }
    }
    ;
    async getAllTransitions() {
        try {
            const transitions = await transition_service_1.TransitionService.getTransitions();
        }
        catch (error) {
        }
    }
    ;
    async deleteTransition() {
        try {
            const transition = await transition_service_1.TransitionService.deleteTransition();
        }
        catch (err) {
        }
    }
    ;
}
exports.default = TransitionHandler;
//# sourceMappingURL=transition.handler.js.map