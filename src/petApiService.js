import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const petApi = createApi({
  reducerPath: "petApi" /* desciption  */,
  baseQuery: fetchBaseQuery({ baseUrl: "http://pets-v2.dev-apis.com" }),
  endpoints: (builder) => ({
    getPet: builder.query({
      query: (id) => ({ url: "pets", params: { id } }),
      /*raw response of the api that I wanna store */
      transformResponse: (response) => response.pets[0],
    }),
    getBreeds: builder.query({
        query: (animal) => ({ url: "breeds", params: { animal } }),
        transformResponse: (response) => response.breeds,
      }),
      search: builder.query({
        query: ({ animal, location, breed }) => ({
          url: "pets",
          params: { animal, location, breed },
        }),
        transformResponse: (response) => response.pets,
      }),
  }),
});

export const { useGetPetQuery,useGetBreedsQuery,useSearchQuery } = petApi;
