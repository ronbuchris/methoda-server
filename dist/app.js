"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
require("./db/mongoose-init"); // apply connection
const dotenv = require("dotenv");
const routes_1 = require("./api/routes");
dotenv.config();
const env = process.env.ENV;
class App {
    constructor(port) {
        this.app = express();
        this.port = port;
        this.app.disable('etag');
        this.initAppUsage();
    }
    async initAppUsage() {
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }
    initializeMiddlewares() {
        // const allowedOrigins: any = config.get(`${env}.AllowedOrigins`);
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors({ credentials: true, origin: ['http://127.0.0.1:3000', 'http://localhost:3000'] }));
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Expose-Headers", "*");
            if (req.method == 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
                return res.status(200).json({});
            }
            next();
        });
    }
    initializeErrorHandling() {
        console.log('errorHandling');
        // this.app.use(errorMiddleware);
    }
    initializeRoutes() {
        const apiRoutes = new routes_1.default();
        this.app.use('/api/', apiRoutes.router);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map