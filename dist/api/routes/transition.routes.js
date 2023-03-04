"use strict";
const express = require("express");
const restaurant_controller_1 = require("../handlers/restaurant.controller");
const router = express.Router();
router.get('/', restaurant_controller_1.default.getAllRestaurants);
router.post('/', restaurant_controller_1.default.createRestaurant);
router.delete('/:transitionId', restaurant_controller_1.default.deleteRestaurant);
module.exports = router;
//# sourceMappingURL=transition.routes.js.map