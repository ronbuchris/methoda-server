"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusService = void 0;
const status_model_1 = require("../../db/models/status.model");
const createStatus = async () => {
    try {
        const newStatus = new status_model_1.default();
        await newStatus.save();
        return newStatus;
    }
    catch (err) {
        throw err;
    }
};
const deleteStatus = async () => {
    try {
        return await status_model_1.default.findByIdAndDelete();
    }
    catch (err) {
        throw err;
    }
};
const getStatuses = async () => {
    try {
        return await status_model_1.default.find().populate('restaurant', '_id');
    }
    catch (err) {
        throw err;
    }
};
const updateStatus = async () => {
    try {
        return await status_model_1.default.findByIdAndUpdate();
    }
    catch (err) {
        throw err;
    }
};
exports.StatusService = {
    createStatus,
    deleteStatus,
    getStatuses,
};
//# sourceMappingURL=status.service.js.map