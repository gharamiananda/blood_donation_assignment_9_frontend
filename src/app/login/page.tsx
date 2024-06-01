"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PHSelectField from "@/components/Forms/PHSelectField";
import { Gender } from "@/types";

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number!"),
  address: z.string().min(1, "Please enter your address!"),
});

export const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  patient: patientValidationSchema,
});

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const LoginPage = () => {
  const router = useRouter();
  const bloodTypes = [
    { value: "A_POSITIVE", label: "A+" },
    { value: "A_NEGETIVE", label: "A-" },
    { value: "B_POSITIVE", label: "B+" },
    { value: "B_NEGETIVE", label: "B-" },
    { value: "AB_POSITIVE", label: "AB+" },
    { value: "AB_NEGETIVE", label: "AB-" },
  ];
  const availabilityData = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  const handleRegister = async (values: FieldValues) => {
    // const data = modifyPayload(values);

    // try {
    //   const res = await registerPatient(data);
    //   // console.log(res);
    //   // if (res?.data?.id) {
    //   //   toast.success(res?.message);
    //   //   const result = await userLogin({
    //   //     password: values.password,
    //   //     email: values.patient.email,
    //   //   });
    //   //   if (result?.data?.accessToken) {
    //   //     storeUserInfo({ accessToken: result?.data?.accessToken });
    //   //     router.push("/dashboard");
    //   //   }
    //   // }
    // } catch (err: any) {
    //   console.error(err.message);
    // }
  };

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
                <form action="#">
                 
                
                 
             
                  <div className="row align-items-center mb-10 g-4">
                    
                    <div className="col-md-12">
                      <label className="fs-14">
                        Number
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row align-items-center mb-10 g-4">
                    
                    <div className="col-md-12">
                      <label className="fs-14">
                        Number
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                 
                
                  <div className="row align-items-center g-4">
                   
                    <div className="col-md-12">
                      <button type="button" className="km__register__btn pt-3 pb-3 mt-3">
                        Submit
                        <span><i className="fas fa-arrow-right" /></span>
                      </button>
                    </div>
                  </div>
                  <div className="row pt-5 text-center">

                    <p>

                   


                    Don't have an account?  <Link href="/register">Create an account</Link>

                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default LoginPage;
