
'use client'
import AGInput from '@/components/Forms/AGInput'
import AgSelectField from '@/components/Forms/AgSelectField'
import PHForm from '@/components/Forms/PHForm'
import { useUpdateDonorMutation } from '@/redux/api/donorApi'
import { useGetSingleUserQuery } from '@/redux/api/userApi'
import { registerPatient } from '@/services/actions/registerPatient'
import { BloodGroup, Gender, TDonor } from '@/types/donor'
import TabComponent from '@/utils/TabCOmpo'
import { modifyPayload } from '@/utils/modifyPayload'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from "zod";

const UpdateProfileForm = () => {
  const { data:profileData, isFetching } = useGetSingleUserQuery<{ data: TDonor, isFetching: boolean }>(undefined)



console.log('profileData', profileData)
  const updateUserNameValidationSchema = z.object({
    firstName: z.string().min(3).max(20).optional(),
    middleName: z.string().min(3).max(20).optional(),
    lastName: z.string().min(3).max(20).optional(),
  });

  const updateDonorValidationSchema = z.object({
    
      name: updateUserNameValidationSchema,
      gender: z.enum([...Gender] as [string, ...string[]]).optional(),
      dateOfBirth: z.string().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloogGroup: z.enum([...BloodGroup] as [string, ...string[]]).optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      age: z.string().optional()  ,
      availability:z.any()

    
  });

  const [defaultValues, setdefaultValues] = useState({

    _id: '',
    id: '',
    name: {
      firstName: '',
      middleName: '',
      lastName: ''

    },
    gender: 'male',
    dateOfBirth: '',
    email: '',
    contactNo: '',
    bloogGroup: '',
    presentAddress: '',
    permanentAddress: '',
    profileImg: '',
    fullName: '',
    username: '',
    age:'',
    availability:true

  });
  const router = useRouter();
const [wantToDonateBlood,setwantToDonateBlood]=useState(false)

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
  const availabilityData = [
    { value:true, label: "Yes" },
    { value: false, label: "No" },
  ];

  const [updateDonorFn] = useUpdateDonorMutation()
  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload({ ...values, age: Number(values.age),wantToDonateBlood});
console.log('datamodifyPayload', data)
    try {
      const res: any = await updateDonorFn({id:profileData?.id,body:data});

      if (res?.data?.id) {
        toast.success(res?.data?.message);

        // if (result?.data?.accessToken) {
        //   storeUserInfo({ accessToken: result?.data?.accessToken });
        //   // router.push("/dashboard");
        // }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };


  //   useEffect(()=>{
  // if(data?.id){
  //   // const previousData:Partial<TDonor>={

  //   // }
  //   // const apiData=data
  //   //  Object.keys(defaultValues).forEach((it)=>{
  //   //   previousData[it]=apiData[it]
  //   // });
  //   setdefaultValues(data)

  // }
  //   },[data])

  console.log('profileData', profileData)

  useEffect(()=>{
    if(profileData?._id){

      setwantToDonateBlood(!!profileData?.wantToDonateBlood)
    }
  },[profileData])
  return (

    <>


          
              
                {
                  isFetching ? <p>loading userinfo...</p> :
                <>
                  <h4 className="mb-3">Update User</h4>

                  <PHForm
                    prefillData={{...profileData,dateOfBirth:profileData?.dateOfBirth?.split('T')?.[0]}}
                    onSubmit={handleRegister}
                    resolver={zodResolver(updateDonorValidationSchema)}
                    defaultValues={defaultValues}  >

                    <div className="col-md-4 col-12 mb-4">
                      <AGInput
                        label="firstName" required
                        name="name.firstName" className="form-control" placeholder="Your firstName"
                      />
                    </div>

                    <div className="col-md-4 col-12 mb-4">
                      <AGInput
                        label="middleName" 
                        name="name.middleName" className="form-control" placeholder="Your middleName"
                      />
                    </div>
                    <div className="col-md-4 col-12 mb-4">
                      <AGInput
                        label="lastName" required
                        name="name.lastName" className="form-control" placeholder="Your lastName"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <AGInput
                        disabld={true}

                        label="Username" required
                        name="username" className="form-control" placeholder="Your username"
                      />

                    </div>
                    <div className="col-md-6 mb-4">
                      <AGInput
                        type="number"
                        label="age" required
                        name="age" className="form-control" placeholder="Your age"
                      />

                    </div>
                   
                    <div className="col-md-6  mb-4">
                      <AGInput
                        label="contactNo" required
                        name="contactNo" className="form-control" placeholder="Your contactNo"
                      />

                    </div>
                    <div className="col-md-6 mb-4">
                      <AGInput
                        disabld={true}
                        label="email" required
                        name="email" className="form-control" placeholder="Your email"
                      />


                    </div>
                    <div className="col-md-6 mb-4">
                      <AGInput
                        type="date"
                        label="dateOfBirth" 
                        name="dateOfBirth" className="form-control" placeholder="Your dateOfBirth"
                      />


                    </div>

                    <div className="col-md-6 mb-4">
                      <AgSelectField
                        label="Gender"
                        name="gender"
                        items={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }, { label: 'other', value: 'other' }]}

                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <AgSelectField
                        label="Bloog Group"
                        name="bloogGroup"
                        items={bloodTypes}

                      />
                    </div>
                    <div className="col-md-6  mb-4">
                      <AGInput
                        label="presentAddress" required
                        name="presentAddress" className="form-control" placeholder="Your presentAddress"
                      />
                    </div>
                    <div className="col-md-6  mb-4">
                      <AGInput
                        label="permanentAddress" required
                        name="permanentAddress" className="form-control" placeholder="Your permanentAddress"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <AgSelectField
                        label="availability"
                        name="availability"
                        required
                        items={availabilityData}

                      />
                    </div>
                    <div className="col-md-6  mb-4">
        <label htmlFor="wantToDonateBlood" className="d-flex align-items-center gap-2">
          
     <input type="checkbox" checked={wantToDonateBlood} className="" onChange={e=>setwantToDonateBlood(e.target.checked)} name="wantToDonateBlood" id="wantToDonateBlood" />
          Are you want to Donate Blood ? 
        
        
        </label>

     
      </div> 


                    <div className="col-12">
                      <button type="submit" className="red_btn">Update Profile</button>
                    </div>

                  </PHForm>
                </>
                }

           
          

     

    </>

  )
}

export default UpdateProfileForm