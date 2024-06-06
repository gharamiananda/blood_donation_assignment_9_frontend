import { baseApi } from './baseApi';
import { tagTypes } from '../tag-types';
import { IMeta } from '@/types/common';
import { IDoctor } from '@/types/doctor';
import { FetchArgs } from '@reduxjs/toolkit/query';

export const donorApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      createDonor: build.mutation({
         query: (data) => ({
            url: '/users/create-donor',
            method: 'POST',
            contentType: 'multipart/form-data',
            data,
         }),
         invalidatesTags: [tagTypes.doctor],
      }),

      // getAllDonors: build.query({
      //    query: (arg: Record<string, any>) => ({
      //       url: '/users/donor-list',
      //       method: 'GET',
      //       params: arg,
      //    }),
      
      //    providesTags: [tagTypes.doctor],
      // }),


      getAllDonors: build.query({
         query: ({queryParams}:{queryParams: Record<string,string |number|boolean| string[] >}) => {
 
           const returnObject: any={
            url: '/users/donor-list',
           method: 'GET'
           }
            if(queryParams && Object.keys(queryParams).length>0){
               const searchparams = new URLSearchParams();
               for (const key in queryParams) {
                  if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
                     const value = queryParams[key];
                     
                           if(Array.isArray(value) ){
                              if(value.length>0){
                                 const valueString =  JSON.stringify(value);
                                 searchparams.append(key, valueString);

                              }


                           }else{


                              const valueString =   String(value);
                              if(valueString.length>0){

                                 searchparams.append(key, valueString);


                              }
                              
                           }
                  }
               }
               returnObject['params']=searchparams
            }
           return returnObject;
 
       
         },
   
         providesTags: [tagTypes.donor],
   
   
       
       }),

      deleteDoctor: build.mutation({
         query: (id) => ({
            url: `/doctor/soft/${id}`,
            method: 'DELETE',
         }),
         invalidatesTags: [tagTypes.doctor],
      }),
      //get single doctor
      getMyRequests: build.query({
         query: (id: string | string[] | undefined) => ({
            url: `/request/donation-request`,
            method: 'GET',
         }),
         providesTags: [tagTypes.doctor],
      }),
      getRequestsToMe: build.query({
         query: (id: string | string[] | undefined) => ({
            url: `/request/donation-request-to-me`,
            method: 'GET',
         }),
         providesTags: [tagTypes.doctor],
      }),
      // updateRequest: build.mutation({
      //    query: (requestId: string | string[] | undefined,data:any) => ({
      //       url: `/donation-request/${requestId}`,
      //       method: 'POST',
      //       contentType: 'multipart/form-data',
      //       data,
      //    }),
      // }),

      updateRequest: build.mutation({
         query: (data) => {

            console.log('data', data)
            return {
               url: `/request/donation-request/${data.id}`,
               method: 'PUT',

               data: data.body,
            };
         },
         invalidatesTags: [tagTypes.doctor, tagTypes.user],
      }),


      
      // update a doctor
      updateDonor: build.mutation({
         query: (data) => {
            console.log(data);
            return {
               url: `/donors/${data.id}`,
               method: 'PATCH',
            contentType: 'multipart/form-data',

               data: data.body,
            };
         },
         invalidatesTags: [tagTypes.doctor, tagTypes.user],
      }),
   }),
});

export const {
   useCreateDonorMutation,
   useGetAllDonorsQuery,
   useDeleteDoctorMutation,
   useGetMyRequestsQuery,
   useUpdateDonorMutation,
   useGetRequestsToMeQuery,
   useUpdateRequestMutation
} = donorApi;
