import React, { useContext } from 'react';
import { ATMContext } from '../context/ATMContext';
import { Button, Card, CardContent, FormControl, Grid } from '@mui/material';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

const cardStyles = {
  padding: '2rem'
}

const buttonStyles: React.CSSProperties = {
  padding: '10px 16px',
  fontWeight: 500,
  letterSpacing: 0.75,
  fontSize: '1rem',
  marginTop: 2,
};

export const DepositView: React.FC = () => {
  const { setError, depositValue, setDepositValue, submitDeposit } = useContext(ATMContext)
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
    const depositAmount = parseFloat(e.target.value);
    setDepositValue(depositAmount);
    setError(false);
  };

  const handleSubmitDeposit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitDeposit();
    navigate('/account');
  };

  return(
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid item>
        <BackButton text='Back to Account' />
        <Card variant='outlined' sx={cardStyles}>
          <CardContent>
            <form onSubmit={(handleSubmitDeposit)}>
              <FormControl variant="outlined">
                <Input
                    label='Deposit Amount'
                    error={false}
                    type='number'
                    inputProps={{ step: '0.01' }}
                    handleOnChange={handleOnChange}
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={buttonStyles}
                    disabled={!depositValue}
                >
                    Submit Deposit
                </Button>
            </FormControl>
          </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};

export default DepositView;