import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import Transition, { ITransition } from '../../db/models/transition.model';

const createTransition = async (transition: ITransition) => {
    try {
        const newTransition = new Transition(transition);
        const savedTransition = await newTransition.save();
        const fullTransition = await getTransition(savedTransition._id)
        return fullTransition;
    } catch (err) {
        throw err;
    }
};
const getTransition = async (id: ObjectId) => {
    return await Transition.findById(id).populate('fromStatus').populate('toStatus')
}
const deleteTransition = async (transitionId: string) => {
    try {
        return await Transition.findByIdAndDelete(transitionId);
    } catch (err) {
        throw err;
    }
};
const resetWorkflowTransitions = async () => {
    try {
        return await Transition.remove();
    } catch (err) {
        throw err;
    }
};
const deleteTransitions = async (statusId: string) => {
    try {
        const deletedFromCount = await Transition.deleteMany({ fromStatus: new ObjectId(statusId) })
        const deletedToCount = await Transition.deleteMany({ toStatus: new ObjectId(statusId) })
        return deletedFromCount.deletedCount + deletedToCount.deletedCount
    } catch (err) {
        throw err;
    }
};

const getTransitions = async () => {
    try {
        return await Transition.find().populate('fromStatus').populate('toStatus')
    } catch (err) {
        throw err;
    }
};

export const TransitionService = {
    createTransition,
    deleteTransition,
    getTransitions,
    deleteTransitions,
    resetWorkflowTransitions
};
