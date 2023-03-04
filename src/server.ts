import * as dotenv from "dotenv";
dotenv.config();
import App from './app';

const app = new App(
    process.env.PORT || 3030
);

app.listen();
