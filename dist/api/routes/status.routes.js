"use strict";
const express = require("express");
const chef_controller_1 = require("../handlers/chef.controller");
const router = express.Router();
router.get('/', chef_controller_1.default.getAllChefs);
router.post('/', chef_controller_1.default.createChef);
router.delete('/:statusId', chef_controller_1.default.deleteChef);
module.exports = router;
//# sourceMappingURL=status.routes.js.map