
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = ''
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
})
