import { InputLabel, OutlinedInput } from '@mui/material';
import React, { ChangeEvent } from 'react';

interface InputProps {
  sx?: React.CSSProperties;
  label?: string;
  value?: string;
  icon?: any;
  error: boolean;
  type: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void}

export const Input: React.FC<InputProps> = ({
  value,
  label,
  error,
  type,
  icon,
  handleOnChange
}) => {

  return (
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
      />
    </>
  )
};