import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export interface IStatus {
    name: String;
    isInitial: Boolean;
    isOrphan: Boolean;
    isFinal: Boolean;
}

export interface IStatusModel extends IStatus, Document { }

export const StatusSchema = new Schema(
    {
        name: { type: String, required: true },
        isInitial: { type: Boolean, required: true },
        isOrphan: { type: Boolean, required: true },
        isFinal: { type: Boolean, required: true, default: false }
    }
);

export default mongoose.model<IStatus>('Status', StatusSchema);
