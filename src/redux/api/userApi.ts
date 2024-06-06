import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { TDonor } from "@/types/donor";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
      transformResponse: (response: TDonor, meta, arg) => {
        return {...response,age: response?.age+''
        }
      }
    }),

    usersList: build.query({
      query: () => ({
         url: `/users/user-list`,
         method: 'GET',
      }),
      providesTags: [tagTypes.users],

   }),
   updateUserRequest: build.mutation({
    query: (data) => {

       console.log('data', data)
       return {
          url: `/users/change-status/${data.id}`,
          method: 'POST',

          data: data.body,
       };
    },
    invalidatesTags: [tagTypes.users],
 }),
  }),
});

export const { useGetSingleUserQuery ,useUsersListQuery , useUpdateUserRequestMutation} = userApi;
