import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false // In case the user is not logged in (e.g., failed login attempt)
    },
    action: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export const Log = mongoose.model('Log', logSchema);
