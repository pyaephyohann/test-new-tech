import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/",
  }),
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => "todos",
      providesTags: ["Todos"],
    }),
    addToDos: builder.mutation({
      query: (todo) => ({
        url: "todos/newTodo",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateToDo: builder.mutation({
      query: (todo) => ({
        url: `todos/updateToDo`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetToDosQuery, useAddToDosMutation, useUpdateToDoMutation } =
  apiSlice;
