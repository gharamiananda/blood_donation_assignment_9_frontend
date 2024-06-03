'use client'

import AGInput from '@/components/Forms/AGInput'
import AgSelectField from '@/components/Forms/AgSelectField';
import PHForm from '@/components/Forms/PHForm'
import { useCreateRequestMutation } from '@/redux/api/RequestApi';
import { useGetSingleUserQuery } from '@/redux/api/userApi';
import { BloodGroup, TDonor, TDonorRes } from '@/types/donor';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react'
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from "zod";


const RequestForm:FC<{donorInfo:TDonorRes}> = ({donorInfo}) => {



   const { data:myprofileData, isFetching } = useGetSingleUserQuery<{ data: TDonor, isFetching: boolean }>(undefined)


const [requestCreateFn]=useCreateRequestMutation();

 const validationSchema = z.object({
    reason: z.string(),
    phoneNumber:z.string(),
    dateOfDonation: z.string(),
    hospitalName:z.string(),
    hospitalAddress:z.string(),
  bloogGroup: z.enum([...BloodGroup] as [string, ...string[]]),
  });
  
   const defaultValues = {
   
    reason: "",
    dateOfBirth: "",
    bloogGroup: ""
    
  };
    const bloodTypes = [
        { value: "A_POSITIVE", label: "A+" },
        { value: "A_NEGETIVE", label: "A-" },
        { value: "B_POSITIVE", label: "B+" },
        { value: "B_NEGETIVE", label: "B-" },
        { value: "AB_POSITIVE", label: "AB+" },
        { value: "AB_NEGETIVE", label: "AB-" },
    
        { value: "O_POSITIVE", label: "O+" },
        { value: "O_NEGETIVE", label: "O-" },
      ];

  const handleRegister = async (values: FieldValues) => {
    // const data = modifyPayload({ ...values, age: Number(values.age) });

    try {
      const res: any = await requestCreateFn({...values,donorId:donorInfo?.data?.id});

      if (res?.data?.id) {
        toast.success(res?.message);

      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div className="col-xl-7">
    <div className="km__box__form">
      <h4 className="mb-40">Make a Request</h4>
      <p className="mb-30">
        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
        demoralized by the charms
      </p>
    
    </div>

    

      <PHForm
        onSubmit={handleRegister}
        resolver={zodResolver(validationSchema)}
        defaultValues={defaultValues} 
        prefillData={{...myprofileData}}
        
        >

       
        <div className="col-md-6  mb-4">
          <AGInput
            label="Full Name" required
            name="fullname" disabld  className="form-control" placeholder="Your Full Name"
          />

        </div>
        
        <div className="col-md-6 mb-4">
          <AGInput
            label="email" required
            disabld
            name="email" className="form-control" placeholder="Your email"
          />


        </div>
        <div className="col-md-6 mb-4">
          <AGInput
          disabld
            label="age" required
            name="age" className="form-control" placeholder="Your age"
          />


        </div>
        <div className="col-md-6 mb-4">
          <AGInput
            label="phoneNumber" required
            name="phoneNumber" className="form-control" placeholder="Your phoneNumber"
          />


        </div>
        
        <div className="col-md-6 mb-4">
          <AGInput
            type="date"
            label="date of dateOfDonation" required
            name="dateOfDonation" className="form-control" placeholder="Your date of dateOfDonation"
          />


        </div>

        <div className="col-md-6 mb-4">
          <AgSelectField
            label="Gender"
            name="gender"
            required
            disabled
            items={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }, { label: 'other', value: 'other' }]}

          />
        </div>
      


        <div className="col-md-6 mb-4">
        <AgSelectField
        label="Blood type needed"
        name="bloogGroup"
        items={bloodTypes}
        
        />
      </div>
        <div className="col-md-6 mb-4">
          <AGInput
            label="hospitalName" required
            name="hospitalName" className="form-control" placeholder="Your hospitalName"
          />


        </div> 
        <div className="col-md-6 mb-4">
          <AGInput
            label="hospitalAddress" required
            name="hospitalAddress" className="form-control" placeholder="Your hospitalAddress"
          />


        </div> 
        

       

       

       
        <div className="col-12  mb-4">
          <AGInput
            label="reason" required
            type='textarea'
            name="reason" className="form-control" placeholder="Your reason"
          />
        </div>


        <div className="col-12">
          <button type="submit" className="contact__btn">
          Submit Request
          <i className="fa-solid fa-angles-right" />
        </button>
        </div>

      </PHForm>
  
  </div>
  )
}

export default RequestForm