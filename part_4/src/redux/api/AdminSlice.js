// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'admin',     // action name 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getAccount:            // getAccount is a function 
    builder.query({        // if you use the get method then use the query otherwise use mutation
      query: () => `account/`,      // query path 
      providesTags:['account/']     // if data are cashing then used the providesTags
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAccountQuery } = adminApi