import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Messages"],
  endpoints: (builder) => ({
    getMessage: builder.query({
      query: () => "messages",
      providesTags: ["Messages"],
    }),
    addMessage: builder.mutation({
      query: (newMsg) => ({
        url: "messages",
        method: "POST",
        body: newMsg,
      }),
      invalidatesTags: ["Messages"],
    }),
    likeMessage: builder.mutation({
      query: ({ id, likes }) => ({
        url: `messages/${id}`,
        method: "PATCH",
        body: { likes },
      }),
      invalidatesTags: ["Messages"],
    }),
  }),
});

export const {
  useGetMessageQuery,
  useAddMessageMutation,
  useLikeMessageMutation,
} = messageApi;
