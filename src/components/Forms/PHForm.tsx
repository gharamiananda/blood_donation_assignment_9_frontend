import { useEffect } from "react";
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
  prefillDataHanlder?: any;
  prefillData?: any;

} & TFormConfig;

const PHForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
  prefillDataHanlder,
  prefillData
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  const { handleSubmit, reset, formState, getValues, watch, setValue } = methods;

  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    onSubmit(data);
    // reset();
  };



  const handlerrr: SubmitHandler<FieldValues> = (data) => {

    prefillDataHanlder(setValue);
  };

  // const prefillDataHanlder: SubmitHandler<FieldValues> = (data) => {


  //   Object.keys(formConfig.defaultValues||{}).forEach(it=>{
  //     setValue(it,data[it])
  //    })
  //   // reset();
  // };

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
  }, [prefillData?.id])

  console.log('erorr',getValues(), formState.errors)

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(submit)} className="row hm1_contact_form" >{children}</form>
    </FormProvider>
  );
};

export default PHForm;
