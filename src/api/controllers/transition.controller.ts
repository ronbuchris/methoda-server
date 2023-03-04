import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import TransitionHandler from '../handlers/transition.handler';
import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { ITransition } from 'db/models/transition.model';

class TransitionController {
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }
    protected initializeRoutes() {
        this.router.get('/', this.getAllTransitions);
        this.router.post('/', this.createTransition);
        this.router.delete('/reset', this.resetWorkflowTransitions);
        this.router.delete('/deleteMany', this.deleteTransitions);
        this.router.delete('/', this.deleteTransition);
    }
    async getAllTransitions(request: Request, response: Response, next: NextFunction) {
        const transitionHandler = new TransitionHandler();
        try {
            const transitions = await transitionHandler.getTransitions()
            return response.send(transitions)
        } catch (err) {
            next(err);
        }
    }
    async createTransition(request: Request, response: Response, next: NextFunction) {
        const transitionHandler = new TransitionHandler();
        const { transition } = request.body
        const fromStatus = new ObjectId(transition.fromStatus._id)
        const toStatus = new ObjectId(transition.toStatus._id)
        transition.fromStatus = fromStatus
        transition.toStatus = toStatus
        try {
            const newTransition = await transitionHandler.createTransition(transition)
            return response.send(newTransition)
        } catch (err) {
            next(err);
        }
    }
    async deleteTransition(request: Request, response: Response, next: NextFunction) {
        const transitionHandler = new TransitionHandler();
        const { transitionId } = request.body
        try {
            const deletedTransition = await transitionHandler.deleteTransition(transitionId)
            return response.send(deletedTransition)
        } catch (err) {
            next(err);
        }
    }
    async resetWorkflowTransitions(request: Request, response: Response, next: NextFunction) {
        const transitionHandler = new TransitionHandler();
        try {
            const deletedTransition = await transitionHandler.resetWorkflowTransitions()
            return response.send(deletedTransition)
        } catch (err) {
            next(err);
        }
    }
    async deleteTransitions(request: Request, response: Response, next: NextFunction) {
        let transitions: ITransition[];
        const transitionHandler = new TransitionHandler();
        const { statusId } = request.body
        try {
            const deletedTransitions = await transitionHandler.deleteTransitions(statusId)
            if (deletedTransitions) {
                transitions = await transitionHandler.getTransitions()
            }
            return response.send(transitions)
        } catch (err) {
            next(err);
        }
    }

}

export default TransitionController;