// import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  style?: Record<string,string>;
  required?: boolean;
  className?:string
  placeholder?:string
};

const AGInput = ({
  name,
  label,
  type = "text",
  required,
  style,
  className,
  placeholder
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        
        
        <>
         <label className="fss-18">{label} {required && <span>*</span>}</label>
        <input 
        
        className={className||"form-control"}
        
        
        {...field}
        style={{ ...style }}
    
        type={type}
        placeholder={placeholder||label}
        required={required}
        // error={!!error?.message}
        // helperText={error?.message}
        
        />
        </>
       
      )}
    />
  );
};

export default AGInput;
 