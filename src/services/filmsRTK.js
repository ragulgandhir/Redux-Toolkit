import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

  // Define our single API slice object
export const peopleApi = createApi({
  // The cache reducer expects to be added at `state.api`
  reducerPath: "people",
  // All of our requests will have URLs starting with
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ghibliapi.herokuapp.com",
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPeople` endpoint is a "query" operation that returns data
    getPeople: builder.query({
      // The URL for the request is '/https://ghibliapi.herokuapp.com/people'
      query: () => `/people`,
    }),
  }),
});

// Export the auto-generated hook for the `getPeople` query endpoint
export const { useGetPeopleQuery } = peopleApi;