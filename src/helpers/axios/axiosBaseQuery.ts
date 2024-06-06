import { IMeta } from "@/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

import type { AxiosRequestConfig, AxiosError } from "axios";
import { instance as axiosInstance } from "./axiosInstance";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];

      
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
      meta?: IMeta;
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers, contentType }) => {
    try {
      const result:any = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": contentType || "application/json",
        },
      });

      if(result?.statusCode===500){
throw(result)
      }

      console.log('resulaxiosInstancet', result)
      return result;
    } catch (axiosError) {

      const err = axiosError as AxiosError;
      console.log('erraxiosError', err)
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message ||err,
        },
      };
    }
  };
