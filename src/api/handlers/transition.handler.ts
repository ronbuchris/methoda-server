import { ITransition } from 'db/models/transition.model';
import { TransitionService } from '../services/transition.service';

class TransitionHandler {

    async createTransition(transition: ITransition) {
        try {
            const newTransition = await TransitionService.createTransition(transition);
            return newTransition
        } catch (err) {
        }
    };

    async getTransitions() {
        try {
            const transitions = await TransitionService.getTransitions();
            return transitions;
        } catch (error) {

        }
    };

    async deleteTransition(transitionId: string) {
        try {
            const deletedTransition = await TransitionService.deleteTransition(transitionId);
            return deletedTransition;
        } catch (err) {

        }
    };
    async deleteTransitions(statusId: string) {
        try {
            const deletedTransitions = await TransitionService.deleteTransitions(statusId);
            return deletedTransitions;
        } catch (err) {

        }
    };
    async resetWorkflowTransitions() {
        try {
            const deletedTransitions = await TransitionService.resetWorkflowTransitions();
            return deletedTransitions;
        } catch (err) {

        }
    };
}
export default TransitionHandler
