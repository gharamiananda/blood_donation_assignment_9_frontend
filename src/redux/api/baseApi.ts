import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "https://assignment9bloodapi-mpn0nuagl-anandas-projects-91b9a04e.vercel.app/api/v1" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
