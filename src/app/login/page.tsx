"use client";

import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues, FieldValue } from "react-hook-form";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AGInput from "@/components/Forms/AGInput";
import { loginDonor } from "@/services/actions/loginDonor";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useEffect } from "react";


const LoginPage = () => {

  const[loginFn,{error}]=useUserLoginMutation<{
    requestId?: undefined;
    data?: undefined;
    error?: any;
    endpointName?: string | undefined;
    startedTimeStamp?: undefined;
    fulfilledTimeStamp?: undefined;
}>();

  console.log('error', error)
  const router = useRouter();
  const handleLogin = async (values: FieldValues) => {
    const data = values;

    try {
      const res = await loginFn(data);
      console.log(res,'loginres');


      if (res?.data?.id) {
        toast.success(res?.data?.message);
       
        if (res?.data?.accessToken) {
          storeUserInfo({ accessToken: res?.data?.accessToken });
          router.push("/profile");
        }
      }

    } catch (err: any) {
      console.log('err', err)
      toast.success(err?.message||'Something went wrong!');

    }
  };

  useEffect(()=>{
    if(error?.data as string){
      toast.success(error?.data||'Something went wrong!');

    }
  },[error])


 const validationSchema = z.object({
  email: z.string({ required_error: 'Email is required.' }),
  password: z.string({ required_error: 'Password is required' }),
});

 const defaultValues = {
  
    password: "",
    email: "",
  }
  return (
    <>


      <section className="km__register__box ptb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="text-center">
                <div className="km__website__title mb-30">
                  <h2>Blood Ai Organization</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="km__form__box">
              <PHForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}  >
   
      <div className="col-xl-12 col-12 mb-4">
        <AGInput
      label="email" required
        name="email" className="form-control" placeholder="Your email"
        />
      </div>
      <div className="col-xl-12 col-12 mb-4">
        <AGInput
      label="password" required
        name="password" className="form-control" placeholder="Your password"
        />
      </div>   
                
                 
             
                 
                
                  <div className="row align-items-center g-4">
                   
                    <div className="col-md-12">
                      <button type="submit" className="km__register__btn pt-3 pb-3 mt-3">
                        Submit
                        <span><i className="fas fa-arrow-right" /></span>
                      </button>
                    </div>
                  </div>
                  <div className="row pt-5 text-center">

                    <p>

                   


                    Don&rsquo;t have an account?  <Link href="/register">Create an account</Link>

                    </p>
                  </div>
                  </PHForm>

              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default LoginPage;
