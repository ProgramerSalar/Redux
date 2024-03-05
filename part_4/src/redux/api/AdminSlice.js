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
    addAccount:builder.mutation({    // GET operation are query and other are mutation like POST, PUT, Delete
        query:(amount, id) => ({
            url:"account/",
            method:"POST",
            body:{amount, id}  // amount and id send karna hai 
        }), 
        invalidatesTags:['account/']   //  invalidateTags means, kon kon sa data jha data ko CRUD operation karna mens chanage karna hai 
    }),
    deleteAccount: builder.mutation({
        query: (id) => ({
            url:`account/${id}`,
            method:"DELETE",
            
        }),
        invalidatesTags:['account/']
    }),
    updateAccount: builder.mutation({
      query: ({id, amount}) => ({
        url:`account/${id}`,
        method:"PUT",
        body:{amount}
      }),
      invalidatesTags:['account/']
    })
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAccountQuery, useAddAccountMutation, useDeleteAccountMutation, useUpdateAccountMutation } = adminApi