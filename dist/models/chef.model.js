"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChefSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    chefOfTheWeek: { type: Boolean, required: true, default: false }
}, {
    versionKey: false,
    supressReservedKeysWarning: true,
    timestamps: true
});
exports.default = mongoose_1.default.model('Chef', ChefSchema);
//# sourceMappingURL=chef.model.js.map