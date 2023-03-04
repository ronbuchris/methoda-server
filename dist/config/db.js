"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const dotenv_1 = require("dotenv");
dotenv_1.default.config();
const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = '9qqpDhqZOJxmZqzS';
const MONGO_URL = `mongodb+srv://ronbuchris:9qqpDhqZOJxmZqzS@cluster0.8otc2.mongodb.net/methoda`;
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5001;
exports.dbConfig = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
// export const mongooseConfig = (app: express.Application, port: number) => {
//     mongoose.set('strictQuery', false);
//     app.listen(port, () => {
//         mongoose
//             .connect(dbConfig.mongo.url, { retryWrites: true, w: 'majority' })
//             .then(() => {
//                 console.log('Connected to mongodb');
//             })
//             .catch((error) => console.log('error with mongodb ' + error));
//         console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
//     });
// }
//# sourceMappingURL=db.js.map