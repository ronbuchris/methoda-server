"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DishSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    restaurant: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Restaurant' },
    ingredients: { type: String, required: true },
    image: { type: String, required: true },
    icon: { type: String, required: true },
    price: { type: Number, required: true }
}, {
    versionKey: false,
    supressReservedKeysWarning: true,
    timestamps: true
});
exports.default = mongoose_1.default.model('Dish', DishSchema);
//# sourceMappingURL=dish.model.js.map