import { Log } from "../models/log.model.js";

export const getAllLogs = async (req, res) => {
    try {
        const logs = await Log.find().sort({ timestamp: -1 });
        console.log(logs);
        return res.status(200).json({
            success: true,
            logs
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch logs."
        });
    }
};
