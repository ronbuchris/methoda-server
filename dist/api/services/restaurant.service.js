"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantService = void 0;
const mongoose_1 = require("mongoose");
const restaurant_model_1 = require("../../models/restaurant.model");
const createRestaurant = async ({ name, chef, opens, closes, thumb, image, stars, isOpen, isPopular, isNew }) => {
    try {
        const newRestaurant = new restaurant_model_1.default({
            _id: new mongoose_1.default.Types.ObjectId(),
            name,
            chef,
            opens,
            closes,
            thumb,
            image,
            stars,
            isOpen,
            isPopular,
            isNew
        });
        await newRestaurant.save();
        return newRestaurant;
    }
    catch (err) {
        throw err;
    }
};
const deleteRestaurant = async (id) => {
    try {
        return await restaurant_model_1.default.findByIdAndDelete(id);
    }
    catch (err) {
        throw err;
    }
};
const getRestaurantById = async (id) => {
    try {
        return await restaurant_model_1.default.findById(id).populate('restaurant', '_id');
    }
    catch (err) {
        throw err;
    }
};
const getRestaurants = async () => {
    try {
        return await restaurant_model_1.default.find().populate('restaurant', '_id');
    }
    catch (err) {
        throw err;
    }
};
const updateRestaurant = async (restaurantId, data) => {
    try {
        return await restaurant_model_1.default.findByIdAndUpdate(restaurantId, data, { new: true });
    }
    catch (err) {
        throw err;
    }
};
exports.RestaurantService = {
    createRestaurant,
    deleteRestaurant,
    getRestaurantById,
    getRestaurants,
    updateRestaurant
};
//# sourceMappingURL=restaurant.service.js.map