import mongoose from 'mongoose';
import Status, { IStatus } from '../../db/models/status.model';

const createStatus = async (status: any) => {
    try {
        const newStatus = new Status(status);
        await newStatus.save();
        return newStatus;
    } catch (err) {
        throw err;
    }
};
const deleteStatus = async (statusId: string) => {
    try {
        return await Status.findByIdAndDelete(statusId);
    } catch (err) {
        throw err;
    }
};
const resetWorkflowStatuses = async () => {
    try {
        return await Status.remove();
    } catch (err) {
        throw err;
    }
};

const getStatuses = async () => {
    try {
        return await Status.find();
    } catch (err) {
        throw err;
    }
};
const updateStatuses = async (data: IStatus[]) => {
    try {
        for (const status of data) {
            await Status.findOneAndUpdate({ name: status.name }, { $set: status })
        }
        return
    } catch (err) {
        throw err;
    }
};

export const StatusService = {
    createStatus,
    deleteStatus,
    getStatuses,
    updateStatuses,
    resetWorkflowStatuses,
};
