"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_service_1 = require("../services/restaurant.service");
const createRestaurant = async (req, res, next) => {
    try {
        const { name, chef, opens, closes, thumb, image, stars, isOpen, isPopular, isNew } = req.body;
        const addedRestaurant = await restaurant_service_1.RestaurantService.createRestaurant({ name, chef, opens, closes, thumb, image, stars, isOpen, isPopular, isNew });
        res.status(201).json({ restaurant: addedRestaurant });
    }
    catch (err) {
        return res.status(500).json({ error: 'Failed to add Restaurant' });
    }
};
const getRestaurant = async (req, res, next) => {
    try {
        const restaurantId = req.params.restaurantId;
        const restaurant = await restaurant_service_1.RestaurantService.getRestaurantById(restaurantId);
        res.status(200).json({ restaurant });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to get restaurant' });
    }
};
const getAllRestaurants = async (req, res, next) => {
    try {
        const restaurants = await restaurant_service_1.RestaurantService.getRestaurants();
        res.status(200).json({ restaurants });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get restaurants' });
    }
};
const updateRestaurant = async (req, res, next) => {
    try {
        const restaurantId = req.params.restaurantId;
        const updatedRestaurant = await restaurant_service_1.RestaurantService.updateRestaurant(restaurantId, req.body);
        res.status(200).json({ restaurant: updatedRestaurant });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update restaurant' });
    }
};
const deleteRestaurant = async (req, res, next) => {
    try {
        const restaurantId = req.params.restaurantId;
        const restaurant = await restaurant_service_1.RestaurantService.deleteRestaurant(restaurantId);
        restaurant ? res.status(200).json({ message: 'Restaurant deleted successfully' }) : res.status(404).json({ message: 'restaurant not found' });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to delete restaurant' });
    }
};
exports.default = {
    createRestaurant,
    getRestaurant,
    getAllRestaurants,
    updateRestaurant,
    deleteRestaurant
};
//# sourceMappingURL=restaurant.controller.js.map