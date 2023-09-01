import React, { useContext } from 'react';
import { ATMContext } from '../context/ATMContext';
import { Button, Card, CardContent, FormControl, Grid, Typography } from '@mui/material';
import { Input } from '../components/Input';

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

  const handleWithdrawalClick = () => {
    submitWithdrawal();
  };

  return(
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid item>
        <Card variant='outlined' sx={cardStyles}>
          <CardContent>
            <FormControl variant="outlined">
              <Input
                  label='Withdrawal Amount'
                  error={false}
                  type='number'
                  handleOnChange={handleOnChange}
              />
              <Button
                  variant="contained"
                  type="button"
                  sx={buttonStyles}
                  onClick={handleWithdrawalClick}
                  disabled={!withdrawalValue}
              >
                  Submit Withdrawal
              </Button>
              {error && (
                <Typography variant="body2" color="error" sx={{mt: 1}}>
                  You have reached your daily withdrawal limit of ${customer && (customer.dailyWithdrawalLimit / 100).toFixed(2)}
                </Typography>
              )}              
            </FormControl>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};

export default WithDrawalView;