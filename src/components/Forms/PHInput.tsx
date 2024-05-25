import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
};

const PHInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth = true,
  sx,
  required,
  multiline = false,
  rows = 4,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          placeholder={label}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
          multiline={multiline}
          rows={multiline ? rows : undefined} // Only set rows if multiline is true
        />
      )}
    />
  );
};

export default PHInput;
