"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AGInput from "@/components/Forms/AGInput";
import AgSelectField from "@/components/Forms/AgSelectField";
import { BloodGroup,Gender } from "@/types/donor";
import { useState } from "react";
import DragAndDropFileUpload from "@/utils/DrgAndDropFileUpload";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useCreateDonorMutation } from "@/redux/api/donorApi";
import StateCity from "./components/StateCity";


const RegisterPage = () => {


  const [selectedFile, setSelectedFile] = useState<File | null>(null);

const createUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().max(20).optional(),
  lastName: z.string().max(20),
});

 const validationSchema = z.object({
  password: z.string().max(20),
  username: z.string().max(20),
  age: z.string().max(20),

 
  name: createUserNameValidationSchema,
  gender: z.enum([...Gender] as [string, ...string[]]),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string().optional(),
  bloogGroup: z.enum([...BloodGroup] as [string, ...string[]]),
  
});

const [wantToDonateBlood,setwantToDonateBlood]=useState(false)

 const defaultValues = {
  password: null,
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    gender:'male',
    bloogGroup:'A_POSITIVE',
    dateOfBirth:''
    

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

  const[loginFn,{isLoading:loginLoading}]=useUserLoginMutation();
    const[registerFn,{isLoading:registerLoading}]= useCreateDonorMutation()


  const handleRegister = async (values: FieldValues) => {



    console.log('city,country,state', city,country,state,values)
    if(!city || !country || !state){
      return;
    }


    const allValues:Record<string,unknown>={...values, country,state,city, age:Number(values.age),wantToDonateBlood}

    if(selectedFile){
      allValues['file']=selectedFile
    }
    const data = modifyPayload(allValues);

    try {
      const res :any= await registerFn(data);
     console.log('res?.datadsds', res?.data)
      if (res?.data?.id) {
        toast.success(res?.message);
       
        
          const resLogin = await loginFn({email:res?.data?.email,password:values?.password});
          console.log(res,'loginres');
    
    
          if (resLogin?.data?.id) {
            toast.success(resLogin?.data?.message);
           
            if (resLogin?.data?.accessToken) {
              storeUserInfo({ accessToken: resLogin?.data?.accessToken });
              router.push("/profile");
            }
          }
       
      }
    } catch (err: any) {
      toast.success(err.message||'SOmething went wrong!');

      console.error(err.message||'SOmething went wrong!');
    }
  };


  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  return (
    <>


      <section className="km__register__box ptb-120">
        <div className="container">
        
     <div className="row">
  <div className="appointment">
  <DragAndDropFileUpload
  selectedFile={selectedFile}
  setSelectedFile={setSelectedFile}
  />

    <h4 className="mb-3">Register Form</h4>

    <PHForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
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
      type="password"
      label="Password" required
      name="password" className="form-control" placeholder="Your password"
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
        required
        name="gender"
        items={[{label:'Male',value:'male'},{label:'Female',value:'female'},{label:'other',value:'other'}]}
        
        />
      </div>
      <div className="col-md-6 mb-4">
        <AgSelectField
        required
        label="Bloog Group"
        name="bloogGroup"
        items={bloodTypes}
        
        />
      </div>
     <StateCity
     country={country} setCountry={setCountry}
      state={state} setState={setState} 
      city={city} setCity={setCity}
     
     />


      <div className="col-md-6  mb-4">
        <label htmlFor="wantToDonateBlood" className="d-flex align-items-center gap-2">
          
     <input type="checkbox" className="" onChange={e=>setwantToDonateBlood(e.target.checked)} name="wantToDonateBlood" id="wantToDonateBlood" />
          Are you want to Donate Blood ? 
        
        
        </label>

     
      </div> 
     
      
      
    
      <div className="col-12">
        <button type="submit" disabled={loginLoading||registerLoading} className="red_btn">Submit Now</button>
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