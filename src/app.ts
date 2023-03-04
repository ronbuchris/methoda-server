
import * as express from 'express';
import * as cors from 'cors';
import './db/mongoose-init'; // apply connection
import * as dotenv from 'dotenv';
import ApiRoutes from './api/routes';
dotenv.config();

const env = process.env.ENV;
class App {
    public app: express.Application;
    public port: number;

    constructor(port: any) {
        this.app = express();
        this.app.use(cors());
        const corsOptions = {
            // Make sure origin contains the url your frontend is running on
            origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
            credentials: true
        }
        this.app.use(cors(corsOptions))
        this.port = port;

        this.app.disable('etag');
        this.initAppUsage();
    }

    private async initAppUsage() {
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();

    }

    private initializeMiddlewares() {
        // const allowedOrigins: any = config.get(`${env}.AllowedOrigins`);
        this.app.use(express.urlencoded({ extended: true }))
        // this.app.use(cors({ credentials: true, origin: ['http://127.0.0.1:3000', 'http://localhost:3000'] }));
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

            // if (req.method == 'OPTIONS') {
            //     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            //     return res.status(200).json({});
            // }
            next();
        })
    }

    private initializeErrorHandling() {
        console.log('errorHandling')
        // this.app.use(errorMiddleware);
    }

    private initializeRoutes() {
        const apiRoutes = new ApiRoutes();
        this.app.use('/api/', apiRoutes.router);
        // this.app.use('/api/status/',StatusController.router)
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;

