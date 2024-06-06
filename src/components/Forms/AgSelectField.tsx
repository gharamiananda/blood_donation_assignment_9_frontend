import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IItem {
  value: any;
  label: string;
}

interface ITextField {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  style?: Record<string,string>;
  items: IItem[];
  disabled?:boolean
}

const AgSelectField = ({
  items,
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
  style,
  disabled
}: ITextField) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
       
        <>

<label className="fss-18">{label}{required && <span>*</span>}</label>

<select

{...field}
style={{
  ...style,
}}

// select={select}
// label={label}
disabled={disabled}
required={required}
className="w-100"  name="bloogGroup">
{items.map((item) => (
  <option key={item.value} value={item.value}>
    {item.label}
  </option>
))}
</select>
</>
      )}
    />
  );
};

export default AgSelectField;

