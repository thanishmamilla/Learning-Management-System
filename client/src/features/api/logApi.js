import { authApi } from "./authApi";  // Assuming this is your configured API slice

export const logApi = authApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllLogs: builder.query({
            query: () => `http://localhost:8080/api/v1/logs/all`,  // Absolute path to override base URL
        }),
    }),
});

export const { useGetAllLogsQuery } = logApi;
