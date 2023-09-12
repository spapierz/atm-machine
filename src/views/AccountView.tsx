import React, { useContext } from 'react';
import { ATMContext } from '../context/ATMContext';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { formatToDollar } from '../utils/utils';
import BackButton from '../components/BackButton';

const cardStyles = {
  padding: '2rem'
}

const buttonStyles: React.CSSProperties = {
  padding: '10px 16px',
  fontWeight: 500,
  letterSpacing: 0.75,
  fontSize: '0.9rem',
};

export const AccountView: React.FC = () => {
  const { customer } = useContext(ATMContext)
  const navigate = useNavigate();
  const balance: number | undefined = customer?.balance ?? 0;
  const dailyWithdrawalLimit: number | undefined = customer?.dailyWithdrawalLimit ?? 0;

  const handleWithdrawalClick = () => {
    navigate('/withdrawal');
  };

  const handleDepositClick = () => {
    navigate('/deposit');
  };

  return(
    <Grid container justifyContent={'center'} spacing={2} sx={{ mb: 7 }}>
      <Grid item sx={{ maxWidth: '70rem', width: '90%' }}>
        <BackButton text='Log Out' customUrl="/" />
        <Card variant='outlined' sx={cardStyles}>
          <CardContent>
            <Typography variant='h5' color="text.secondary" gutterBottom sx={{textAlign: 'center'}}>
              Welcome, {customer?.name}!
            </Typography>
            <hr />
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Account Balance:
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant='h6' color="text.secondary">
                  {formatToDollar(balance).toLocaleString()}
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{textAlign: 'right'}}>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Daily Withdrawal Limit:
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant='h6' color="text.secondary">
                  {formatToDollar(dailyWithdrawalLimit)}
                </Typography>
              </Grid>
            </Grid>
            <hr />
          </CardContent>
          <Grid container>
            <Grid item sm={6}>
              <CardActions>
                <Button  variant="contained" sx={buttonStyles} onClick={handleDepositClick}>
                  Make a Deposit
                </Button>
              </CardActions>
            </Grid>
            <Grid item sm={6}>
              <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button  variant="outlined" sx={buttonStyles} onClick={handleWithdrawalClick}>
                  Make a Withdrawal
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
};

export default AccountView;