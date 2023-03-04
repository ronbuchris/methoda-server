"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chef_service_1 = require("../services/chef.service");
const createChef = async (req, res, next) => {
    try {
        const { name, image, description } = req.body;
        const addedChef = await chef_service_1.ChefService.createChef({ name, image, description });
        res.status(201).json({ chef: addedChef });
    }
    catch (err) {
        return res.status(500).json({ error: 'Failed to add chef' });
    }
};
const getChef = async (req, res, next) => {
    try {
        const chefId = req.params.chefId;
        const chef = await chef_service_1.ChefService.getChefById(chefId);
        res.status(200).json({ chef });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to get chef' });
    }
};
const getAllChefs = async (req, res, next) => {
    try {
        const chefs = await chef_service_1.ChefService.getChefs();
        res.status(200).json({ chefs });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get chefs' });
    }
};
const updateChef = async (req, res, next) => {
    try {
        const chefId = req.params.chefId;
        const updatedChef = await chef_service_1.ChefService.updateChef(chefId, req.body);
        res.status(200).json({ chef: updatedChef });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update chef' });
    }
};
const deleteChef = async (req, res, next) => {
    try {
        const chefId = req.params.chefId;
        const chef = await chef_service_1.ChefService.deleteChef(chefId);
        chef ? res.status(200).json({ message: 'Chef deleted successfully' }) : res.status(404).json({ message: 'Chef not found' });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to delete chef' });
    }
};
exports.default = {
    createChef,
    getChef,
    getAllChefs,
    updateChef,
    deleteChef
};
//# sourceMappingURL=chef.controller.js.map