"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_1 = require("express");
const status_controller_1 = require("../api/controllers/status.controller");
const transition_controller_1 = require("../api/controllers/transition.controller");
class ApiRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        const statusController = new status_controller_1.default();
        const transitionController = new transition_controller_1.default();
        router.use('/status/', statusController.router);
        router.use('/transition/', transitionController.router);
    }
}
exports.default = ApiRoutes;
const router = express.Router();
//# sourceMappingURL=routes.js.map