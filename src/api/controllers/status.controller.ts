import * as express from "express";
import { Request, Response, NextFunction } from 'express';
import { Router } from 'express';
import StatusHandler from "../handlers/status.handler";
class StatusController {
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }
    protected initializeRoutes() {
        this.router.get('/', this.getAllStatuses);
        this.router.post('/', this.createStatus);
        this.router.put('/', this.updateStatuses);
        this.router.delete('/reset', this.resetWorkflowStatuses);
        this.router.delete('/', this.deleteStatus);
    }

    async getAllStatuses(request: Request, response: Response, next: NextFunction) {
        const statusHandler = new StatusHandler();
        try {
            const statuses = await statusHandler.getStatuses()
            return response.send(statuses)
            // response.status(200).json({ statuses });
        } catch (err) {

        }
    }
    async createStatus(request: Request, response: Response, next: NextFunction) {
        const statusHandler = new StatusHandler();
        const { status } = request.body
        try {
            const newStatus = await statusHandler.createStatus(status)
            return response.send(newStatus)
        } catch (err) {
            next(err);
        }
    }
    async deleteStatus(request: Request, response: Response, next: NextFunction) {
        const statusHandler = new StatusHandler();
        const { statusId } = request.body
        try {
            const deletedStatus = await statusHandler.deleteStatus(statusId)
            return response.send(deletedStatus)
        } catch (err) {
            next(err);
        }
    }
    async resetWorkflowStatuses(request: Request, response: Response, next: NextFunction) {
        const statusHandler = new StatusHandler();
        try {
            const deletedStatus = await statusHandler.resetWorkflowStatuses()
            return response.send(deletedStatus)
        } catch (err) {
            next(err);
        }
    }
    async updateStatuses(request: Request, response: Response, next: NextFunction) {
        const statusHandler = new StatusHandler();
        const { data } = request.body
        try {
            await statusHandler.updateStatuses(data)
            const updatedStatuses = await statusHandler.getStatuses()
            return response.send(updatedStatuses)
        } catch (err) {
            next(err);
        }
    }

}

export default StatusController;