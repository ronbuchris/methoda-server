"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TransitionSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    fromStatus: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Status' },
    toStatus: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Status' },
});
exports.default = mongoose_1.default.model('Transition', TransitionSchema);
//# sourceMappingURL=transition.model.js.map