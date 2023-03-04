"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const app_1 = require("./app");
const app = new app_1.default(process.env.PORT || 3030);
app.listen();
//# sourceMappingURL=server.js.map