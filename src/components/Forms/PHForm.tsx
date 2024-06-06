'use client'


import { useEffect, useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  prefillData?: any;

} & TFormConfig;

const PHForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
  prefillData
}: TFormProps) => {

  const [formConfig,setformConfig] =useState<TFormConfig>({});




  useEffect(()=>{

    if (resolver) {
      setformConfig(prev=>({...prev,resolver})) ;
    }
  
    if (defaultValues) {
      setformConfig(prev=>({...prev,defaultValues})) ;

    }
  
  },[resolver,defaultValues])
 
  const methods = useForm(formConfig);
  const { handleSubmit, reset, formState, getValues, watch, setValue } = methods;

  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    onSubmit(data);
    // reset();
  };



  useEffect(() => {
    if (prefillData?.id) {
      Object.keys(formConfig.defaultValues || {}).forEach(it => {
        setValue(it, prefillData[it], {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true
        })
      })
    }
  }, [prefillData?.id]);

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(submit)} className="row hm1_contact_form" >{children}</form>
    </FormProvider>
  );
};

export default PHForm;
