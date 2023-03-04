"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionService = void 0;
const transition_model_1 = require("../../db/models/transition.model");
const createTransition = async () => {
    try {
        const newTransition = new transition_model_1.default({});
        await newTransition.save();
        return newTransition;
    }
    catch (err) {
        throw err;
    }
};
const deleteTransition = async () => {
    try {
        return await transition_model_1.default.findByIdAndDelete();
    }
    catch (err) {
        throw err;
    }
};
const getTransitions = async () => {
    try {
        return await transition_model_1.default.find();
    }
    catch (err) {
        throw err;
    }
};
exports.TransitionService = {
    createTransition,
    deleteTransition,
    getTransitions,
};
//# sourceMappingURL=transition.service.js.map