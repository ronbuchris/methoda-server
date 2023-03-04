import * as express from 'express';
import { Router } from 'express';
import StatusController from '../api/controllers/status.controller';
import TransitionController from '../api/controllers/transition.controller';


class ApiRoutes {
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        const statusController = new StatusController();
        const transitionController = new TransitionController();
        this.router.use('/status/', statusController.router);
        this.router.use('/transition/', transitionController.router);
    }
}

export default ApiRoutes;
