
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
import UpdateProfileForm from './components/UpdateProfileForm'
import FillExample from '@/utils/Tabsss'
import Image from 'next/image'
import DragAndDropFileUpload from '@/utils/DrgAndDropFileUpload'
import { Button } from 'react-bootstrap'
import { useChangePasswordMutation } from '@/redux/api/authApi'

const ProfilePage = () => {
  const { data:profileData, isFetching } = useGetSingleUserQuery<{ data: TDonor, isFetching: boolean }>(undefined)




  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  console.log('selectedFile', selectedFile)
  const updateDonorValidationSchema = z.object({
    
    oldPassword: z.string({
      required_error: 'Old password is required',
    }),
    newPassword: z.string({ required_error: 'Password is required' }),
    confirmPassword:  z.string({ required_error: 'Password is required' }),
    
  }).refine(
    (values) => {
      return values.confirmPassword === values.newPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  );

  const [defaultValues, setdefaultValues] = useState({

    oldPassword: '',
    newPassword: '',
    confirmPassword:''

  });

  const [updateDonorFn] = useUpdateDonorMutation();
  const [changePasswordFn] = useChangePasswordMutation();

  const handleUpdatePasswordFn = async (values: FieldValues) => {
    const data = modifyPayload({ ...values, age: Number(values.age)});
console.log('datamodifyPayload', data)
    try {

      const res: any = await changePasswordFn(values);


      console.log('resdatadata', res)
      if (res?.data?.statusCode===200) {
        toast.success(res?.data?.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (

    <>

<div className="container py-5">
  <div className="main-body">
    <div className="row">
      <div className="col-lg-4">



      
              <div className="appointment">

       
            <div className="d-flex flex-column align-items-center text-center">

            {profileData?.role ==='superAdmin' && 
                  <h4 className="mb-3">Welcome to Admin Dashboard</h4>
            
  }
           { profileData?.role !=='superAdmin' &&   <>



              <Image src={profileData?.profileImg || "https://bootdey.com/img/Content/avatar/avatar6.png"} alt="Admin"  className="rounded-circle p-1 bg-primary" width={400} height={600} />
              <DragAndDropFileUpload
  selectedFile={selectedFile}
  setSelectedFile={setSelectedFile}
  />

  {selectedFile && <><Button  onClick={async()=>{
console.log('selectedFile inside', selectedFile)

const allValues:Record<string,unknown>={...profileData, age: Number(profileData.age)}

    if(selectedFile){
      allValues['file']=selectedFile
    }
    const data = modifyPayload(allValues);
    try {
      const res: any = await updateDonorFn({id:profileData?.id,body:data});

      if (res?.data?.id) {
        toast.success(res?.data?.message);

      }
    } catch (err: any) {
      console.error(err.message);
    }

  }}>Upload Profile</Button></>}

  </>}

              <div className="mt-3">
                {/* <h4>{profileData?.name}</h4> */}
              <h5>{`${profileData?.name?.firstName??""} ${profileData?.name?.middleName??''} ${profileData?.name?.lastName??''}`} {profileData?.role ==='superAdmin' &&  profileData?.email}</h5>

                <p className="text-secondary mb-1">{profileData?.bloogGroup}</p>
                <p className="text-muted font-size-sm">{profileData?.presentAddress}</p>
              </div>
            </div>
            <hr className="my-4" />
           {profileData?.role !=='superAdmin' &&  <ul className="list-group list-group-flush">
             
            <>
                  <h4 className="mb-3">Update Password</h4>

                  <PHForm
                    onSubmit={handleUpdatePasswordFn}
                    resolver={zodResolver(updateDonorValidationSchema)}
                    defaultValues={defaultValues}  >

<div className="col-12  mb-4">
                      <AGInput
                      type='password'
                        label="password" required
                        name="oldPassword" className="form-control" placeholder="Your oldPassword password"
                      />
                    </div>
                    <div className="col-12  mb-4">
                      <AGInput
                      type='password'

                        label="newPassword" required
                        name="newPassword" className="form-control" placeholder="Your newPassword"
                      />
                    </div>
                    <div className="col-12  mb-4">
                      <AGInput
                        label="newPassword" required
                        name="confirmPassword" className="form-control" placeholder="Your confirm newPassword"
                      />
                    </div>


                    <div className="col-12">
                      <button type="submit" className="red_btn">Change Password</button>
                    </div>

                  </PHForm>
                </>


            </ul>}
       

        </div>
      

      </div>
      <div className="col-lg-8">
      <div className="appointment">

        {/* <div className="card">
          <div className="card-body"> */}
            <FillExample />
          
          
          </div>
        </div>
        </div>

      
      {/* </div>
    </div> */}
  </div>
</div>

    </>

  )
}

export default ProfilePage