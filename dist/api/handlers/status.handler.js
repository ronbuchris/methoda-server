"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status_service_1 = require("../services/status.service");
class StatusHandler {
    async createStatus() {
        try {
            const addedChef = await status_service_1.StatusService.createStatus();
        }
        catch (err) {
        }
    }
    ;
    async getStatuses() {
        try {
            const chefs = await status_service_1.StatusService.getStatuses();
        }
        catch (error) {
        }
    }
    ;
    async deleteStatus() {
        try {
            const chef = await status_service_1.StatusService.deleteStatus();
        }
        catch (err) {
        }
    }
    ;
}
exports.default = status_service_1.StatusService;
//# sourceMappingURL=status.handler.js.map