import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const peopleApi = createApi({
  reducerPath: "people",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ghibliapi.herokuapp.com",
  }),
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: () => `/people`,
    }),
  }),
});

export const { useGetPeopleQuery } = peopleApi;