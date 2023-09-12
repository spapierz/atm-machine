import React, { useState } from 'react';
import { Input } from '../components/Input';
import { Button, FormControl, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import { boxStyles } from '../styles/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useATMContext } from '../context/ATMContext';

const buttonStyles: React.CSSProperties = {
  backgroundColor: 'rgba(235,107,25,1)',
  color: '#fff',
  width: '100%',
  padding: '10px 16px',
  fontWeight: 500,
  letterSpacing: 0.75,
  fontSize: '1rem',
  marginTop: '20px',
};

const disabledButtonStyles: React.CSSProperties = {
  ...buttonStyles,
  backgroundColor: 'lightgrey',
};

export const PinView: React.FC = () => {
  const [pinValue, setPinValue] = useState<string>('');
  const [showPassword, setShowPassword] = React.useState(false);

  const { login, error, setError } = useATMContext();
  
  const assignButtonStyles: React.CSSProperties =
    pinValue.length === 0 ? disabledButtonStyles : buttonStyles;
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    setPinValue(numericValue);
    setError(false);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(pinValue);
  };

  return (
    <Grid container spacing={2} sx={boxStyles}>
      <Grid item sx={boxStyles}>
        <Typography variant='body1'>
          Enter your PIN number.
        </Typography>
      </Grid>
      <Grid item sx={boxStyles}>
        <form onSubmit={handleOnSubmit}>
          <FormControl variant="outlined">
            <Input
              label='PIN'
              handleOnChange={handleOnChange}
              value={pinValue}
              error={error}
              type={showPassword ? 'number' : 'password'}
              icon={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              variant="contained"
              type="submit"
              style={assignButtonStyles}
              disabled={!pinValue}
            >
              Login
            </Button>
            {error && (
              <Typography variant="body2" color="error" sx={{mt: 1}}>
                Invalid PIN
              </Typography>
            )}
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};

export default PinView;
