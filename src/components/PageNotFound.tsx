import React from 'react';
import { Grid, Typography } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import BackButton from './BackButton';

const PageNotFound: React.FC = () => {
  return (
    <>
      <Grid
        container
        sx={{
            mt: 3,
            height: '50vh',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}
      >
        <Grid item xs={12}>
          <SavingsIcon sx={{fontSize: '3rem'}} />
          <Typography variant="h5" sx={{ mt: 3 }}>Page not found.</Typography>
        </Grid>
        <BackButton text='Go Back' />
      </Grid>
    </>
  );
};

export default PageNotFound;
