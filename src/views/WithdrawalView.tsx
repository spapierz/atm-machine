import React, { useContext } from 'react';
import { ATMContext } from '../context/ATMContext';
import { Button, Card, CardContent, FormControl, Grid, Typography } from '@mui/material';
import { Input } from '../components/Input';
import BackButton from '../components/BackButton';
import { formatToDollar } from '../utils/utils';

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

export const WithDrawalView: React.FC = () => {
  const { customer, error, setError, setWithdrawalValue, withdrawalValue, submitWithdrawal } = useContext(ATMContext)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
    const formattedWithdrawalAmount = parseFloat(e.target.value);
    setWithdrawalValue(formattedWithdrawalAmount);
    setError(false)
  };

  const handleSubmitWithdrawal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitWithdrawal();
  };

  return(
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid item>
        <BackButton text='Back to Account' />
        <Card variant='outlined' sx={cardStyles}>
          <CardContent>
            <form onSubmit={handleSubmitWithdrawal}>
              <FormControl variant="outlined">
                <Input
                    label='Withdrawal Amount'
                    error={false}
                    type='number'
                    inputProps={{ step: '0.01' }}
                    handleOnChange={handleOnChange}
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={buttonStyles}
                    disabled={!withdrawalValue}
                >
                    Submit Withdrawal
                </Button>
                {error && (
                  <Typography variant="body2" color="error" sx={{mt: 1, maxWidth: '200px'}}>
                    You have either reached your daily withdrawal limit of {customer && formatToDollar(customer.dailyWithdrawalLimit)}, or are trying to withdrawal more than your current balance of {customer && formatToDollar(customer.balance)}.
                  </Typography>
                )}
              </FormControl>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};

export default WithDrawalView;