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
import AGInput from "@/components/Forms/AGInput";
import AgSelectField from "@/components/Forms/AgSelectField";
import { BloodGroup,Gender } from "@/types/donor";


const RegisterPage = () => {


const createUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().max(20).optional(),
  lastName: z.string().max(20),
});

 const validationSchema = z.object({
  password: z.string().max(20),
  username: z.string().max(20),
 
  name: createUserNameValidationSchema,
  gender: z.enum([...Gender] as [string, ...string[]]),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string().optional(),
  bloogGroup: z.enum([...BloodGroup] as [string, ...string[]]),
  presentAddress: z.string(),
  permanentAddress: z.string(),
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

    { value: "O_POSITIVE", label: "O+" },
    { value: "O_NEGETIVE", label: "O-" },
  ];
  const availabilityData = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const result :any= await registerPatient(data);
      console.log(result);
      if (result?.data?.id) {
        toast.success(result?.message);
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          // router.push("/dashboard");
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>


      <section className="km__register__box ptb-120">
        <div className="container">
        
     <div className="row">
  <div className="appointment">
    <h4 className="mb-3">Register Form</h4>

    <PHForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}  >
   
      <div className="col-xl-4 col-12 mb-4">
        <AGInput
      label="firstName" required
        name="name.firstName" className="form-control" placeholder="Your firstName"
        />
      </div>

      <div className="col-xl-4 col-12 mb-4">
        <AGInput
      label="middleName" required
        name="name.middleName" className="form-control" placeholder="Your middleName"
        />
      </div>
      <div className="col-xl-4 col-12 mb-4">
        <AGInput
      label="lastName" required
        name="name.lastName" className="form-control" placeholder="Your lastName"
        />
      </div>
      <div className="col-xl-6 col-12 mb-4">
      <AGInput
      label="Username" required
      name="username" className="form-control" placeholder="Your username"
      />
    
      </div>
      <div className="col-xl-6 col-12 mb-4">
      <AGInput
      label="Password" required
      name="password" className="form-control" placeholder="Your password"
      />
    
      </div>
      <div className="col-xl-6 col-12 mb-4">
      <AGInput
      label="contactNo" required
      name="contactNo" className="form-control" placeholder="Your contactNo"
      />
    
      </div>
      <div className="col-6 mb-4">
      <AGInput
      label="email" required
      name="email" className="form-control" placeholder="Your email"
      />
    
     
      </div>
      <div className="col-6 mb-4">
      <AGInput
      type="date"
      label="dateOfBirth" required
      name="dateOfBirth" className="form-control" placeholder="Your dateOfBirth"
      />
    
     
      </div>
      
      <div className="col-6 mb-4">
      <AgSelectField
        label="Gender"
        name="gender"
        items={[{label:'Male',value:'male'},{label:'Female',value:'female'},{label:'other',value:'other'}]}
        
        />
      </div>
      <div className="col-6 mb-4">
        <AgSelectField
        label="Bloog Group"
        name="bloogGroup"
        items={bloodTypes}
        
        />
      </div>
      <div className="col-xl-6 col-12 mb-4">
      <AGInput
      label="presentAddress" required
      name="presentAddress" className="form-control" placeholder="Your presentAddress"
      />
      </div> 
      <div className="col-xl-6 col-12 mb-4">
      <AGInput
      label="permanentAddress" required
      name="permanentAddress" className="form-control" placeholder="Your permanentAddress"
      />
      </div> 
      
      
    
      <div className="col-12">
        <button type="submit" className="red_btn">Submit Now</button>
      </div>
    
    </PHForm>
  </div>
</div>


        </div>
      </section>

    </>
  );
};

export default RegisterPage;





// password: z.string().max(20),
// username: z.string().max(20),

// name: createUserNameValidationSchema,
// gender: z.enum([...Gender] as [string, ...string[]]),
// dateOfBirth: z.string().optional(),
// email: z.string().email(),
// contactNo: z.string(),
// emergencyContactNo: z.string().optional(),
// bloogGroup: z.enum([...BloodGroup] as [string, ...string[]]),
// presentAddress: z.string(),
// permanentAddress: z.string(),