import { IStatus } from 'db/models/status.model';
import { StatusService } from '../services/status.service';

class StatusHandler {

    async createStatus(status: any): Promise<any> {
        try {
            const newStatus = await StatusService.createStatus(status);
            return newStatus;
        } catch (err) {
        }
    };
    async getStatuses() {
        try {
            const statuses = await StatusService.getStatuses();
            return statuses;
        } catch (error) {
        }
    };
    async deleteStatus(statusId: string) {
        try {
            const deletedStatus = await StatusService.deleteStatus(statusId);
            return deletedStatus
        } catch (err) {
        }
    };
    async updateStatuses(data: IStatus[]) {
        try {
            await StatusService.updateStatuses(data);
            return
        } catch (err) {
        }
    };
    async resetWorkflowStatuses() {
        try {
            await StatusService.resetWorkflowStatuses();
            return
        } catch (err) {
        }
    };
}
export default StatusHandler;
