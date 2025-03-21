import { Log } from '../models/log.model.js';

export const logUserAction = async (action, req, userId = null) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        const logEntry = new Log({
            userId,
            action,
            ip
        });

        await logEntry.save();
    } catch (error) {
        console.error('Error logging user action to MongoDB:', error);
    }
};
