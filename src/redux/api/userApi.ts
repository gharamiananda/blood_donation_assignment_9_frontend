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
  }),
});

export const { useGetSingleUserQuery } = userApi;
