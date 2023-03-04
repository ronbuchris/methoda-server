import { StatusSchema } from './status.model';
import mongoose, { Document, Schema } from 'mongoose';

export interface ITransition {
    name: string;
    fromStatus: mongoose.Types.ObjectId;
    toStatus: mongoose.Types.ObjectId;
}

export interface ITransitionModel extends ITransition, Document { }

const TransitionSchema = new Schema(
    {
        name: { type: String, required: true },
        fromStatus: { type: Schema.Types.ObjectId, required: true, ref: 'Status' },
        toStatus: { type: Schema.Types.ObjectId, required: true, ref: 'Status' },
    }
);

export default mongoose.model<ITransitionModel>('Transition', TransitionSchema);
