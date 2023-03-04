"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefService = void 0;
const mongoose_1 = require("mongoose");
const chef_model_1 = require("../../models/chef.model");
const createChef = async ({ name, image, description }) => {
    try {
        const newChef = new chef_model_1.default({
            _id: new mongoose_1.default.Types.ObjectId(),
            name,
            image,
            description
        });
        await newChef.save();
        return newChef;
    }
    catch (err) {
        throw err;
    }
};
const deleteChef = async (id) => {
    try {
        return await chef_model_1.default.findByIdAndDelete(id);
    }
    catch (err) {
        throw err;
    }
};
const getChefById = async (id) => {
    try {
        return await chef_model_1.default.findById(id).populate('restaurant', '_id');
    }
    catch (err) {
        throw err;
    }
};
const getChefs = async () => {
    try {
        return await chef_model_1.default.find().populate('restaurant', '_id');
    }
    catch (err) {
        throw err;
    }
};
const updateChef = async (chefId, data) => {
    try {
        return await chef_model_1.default.findByIdAndUpdate(chefId, data, { new: true });
    }
    catch (err) {
        throw err;
    }
};
exports.ChefService = {
    createChef,
    deleteChef,
    getChefById,
    getChefs,
    updateChef
};
//# sourceMappingURL=chef.service.js.map