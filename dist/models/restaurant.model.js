"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RestaurantSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    chef: [{ type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Chef' }],
    opens: { type: String, required: true },
    closes: { type: String, required: true },
    thumb: { type: String, required: true },
    image: { type: String, required: true },
    stars: { type: Number, required: true },
    isOpen: { type: Boolean, required: true },
    isPopular: { type: Boolean, required: true },
    isNew: { type: Boolean, required: true }
}, {
    versionKey: false,
    supressReservedKeysWarning: true,
    timestamps: true
});
exports.default = mongoose_1.default.model('Restaurant', RestaurantSchema);
//# sourceMappingURL=restaurant.model.js.map