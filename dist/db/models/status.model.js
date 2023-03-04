"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StatusSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    isInitial: { type: String, required: true },
    isOrphan: { type: String, required: true },
    isFinal: { type: Boolean, required: true, default: false }
});
exports.default = mongoose_1.default.model('Status', StatusSchema);
//# sourceMappingURL=status.model.js.map