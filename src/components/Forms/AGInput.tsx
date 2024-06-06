import { Form } from "react-bootstrap";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  style?: Record<string,string>;
  required?: boolean;
  className?:string
  placeholder?:string
  disabld?:boolean
};

const AGInput = ({
  name,
  label,
  type = "text",
  required,
  style,
  className,
  placeholder,
  disabld
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
     
      render={({ field, fieldState: { error ,invalid,isTouched} }) => (
        
        
        <>
         <label  className="fss-18">{label} {required && <span>*</span>}</label>
        <Form.Control 
        className={className||"form-control"}
        disabled={!!disabld}
        
        {...field}
        style={{ ...style }}
        value={field.value}
    
        type={type}
        placeholder={placeholder||label}
        isInvalid={ invalid}

        // error={!!error?.message}
        // helperText={error?.message}
        
        />
          <Form.Control.Feedback type={invalid ?"invalid":'valid'}>
     {error?.message||'This field is required'}
      </Form.Control.Feedback>
        </>
       
      )}
    />
  );
};

export default AGInput;
 