import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getMessage: builder.query({
      query: () => "messages",
    }),
    addMessage: builder.mutation({
      query: (newMsg) => ({
        url: "messages",
        method: "POST",
        body: newMsg,
      }),
    }),
  }),
});
