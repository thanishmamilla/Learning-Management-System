import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const USER_API = "http://localhost:8080/api/v1/user/";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "all",
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `delete/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useDeleteUserMutation } = userApi;
