import React from "react";
import { useGetAllLogsQuery } from "@/features/api/logApi";
import { Card, CardContent } from "@/components/ui/card";

const LogTable = () => {
    const { data, isLoading } = useGetAllLogsQuery();
    console.log(data);

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">IP Logs</h2>
            {data.logs.map((log) => (
                <Card key={log._id} className="mb-4">
                    <CardContent>
                        <p><strong>Action:</strong> {log.action}</p>
                        <p><strong>IP Address:</strong> {log.ip}</p>
                        <p><strong>Timestamp:</strong> {new Date(log.timestamp).toLocaleString()}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default LogTable;
