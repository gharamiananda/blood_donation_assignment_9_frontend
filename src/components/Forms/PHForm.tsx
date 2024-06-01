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
} & TFormConfig;

const PHForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  const { handleSubmit, reset ,formState,getValues,watch} = methods;

  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    onSubmit(data);
    // reset();
  };

  console.log('formState', formState.errors,getValues())

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}  className="row hm1_contact_form" >{children}</form>
    </FormProvider>
  );
};

export default PHForm;
