import { InputLabel, OutlinedInput } from '@mui/material';
import React, { ChangeEvent } from 'react';

type InputHTMLAttributes = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends InputHTMLAttributes {
  sx?: React.CSSProperties;
  label?: string;
  value?: string;
  icon?: any;
  error: boolean;
  type: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void,
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const Input: React.FC<InputProps> = ({
  value,
  label,
  error,
  type,
  icon,
  handleOnChange,
  inputProps
}) => (
  <>
    <InputLabel>{label}</InputLabel>
    <OutlinedInput
      type={type}
      sx={{ backgroundColor: '#fff'}}
      value={value}
      onChange={handleOnChange}
      error={error}
      endAdornment={icon}
      label={label}
      inputProps={inputProps}
    />
  </>
);