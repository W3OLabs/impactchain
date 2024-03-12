import { apiSlice } from "./apiSlice";

const USERS_URL = "/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    signup : builder.mutation({
      query: (data) => ({
        url: "/api/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    logout : builder.mutation({
      query: () => ({
        url: "/api/auth/logout",
        method: "POST",
      }),
    }),
    authenticate: builder.query({
      query: () => "/api/auth/authenticate",

    }),
    getUsers: builder.query({
      query: () => `${USERS_URL}`,
    }),
    getUser: builder.query({
      query: () => "/api/users/profile",
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: USERS_URL,
        method: "POST",
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `${USERS_URL}/${user.id}`,
        method: "PUT",
        body: user,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `${USERS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useLazyAuthenticateQuery,
  useLogoutMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApiSlice;
