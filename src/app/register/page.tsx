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


const RegisterPage = () => {

 const patientValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number!"),
  address: z.string().min(1, "Please enter your address!"),
});

 const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  patient: patientValidationSchema,
});

 const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};
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
  <div className="appointment">
    <h4>Request Appointment Here</h4>
    <form action="#" className="row hm1_contact_form">
      <div className="col-xl-6 col-12 mb-4">
        <input type="text" className="form-control" placeholder="Your Name" />
      </div>
      <div className="col-xl-6 col-12 mb-4">
        <input type="text" className="form-control" placeholder="Phone Number" />
      </div>
      <div className="col-12 mb-4">
        <input type="text" className="form-control" placeholder="Your Email" />
      </div>
      <div className="col-12 mb-4">
        <select className="form-select">
          <option value="d">Donation Type</option>
          <option value="d">Donation Type</option>
          <option value="d">Donation Type</option>
          <option value="d">Donation Type</option>
        </select>
      </div>
      <div className="col-12 mb-4">
        <textarea className="form-control" defaultValue={"Your Message"} />
      </div>
      <div className="col-12">
        <button type="submit" className="red_btn">Submit Now</button>
      </div>
    </form>
  </div>
</div>


        </div>
      </section>

    </>
  );
};

export default RegisterPage;
