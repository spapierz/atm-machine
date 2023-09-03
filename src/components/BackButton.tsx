import React, { useContext } from 'react';
import { Button, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { createBrowserHistory } from 'history';
import { ATMContext } from '../context/ATMContext';

interface ButtonProps {
  text: string
}

const BackButton: React.FC<ButtonProps> = ({ text }) => {
  const { setError } = useContext(ATMContext)
  const history = createBrowserHistory();
  
  const handleGoBack = () => {
    setError(false);
    history.back();
  };

  return (
    <Box display="flex" alignItems="center">
      <Button
        variant="outlined"
        startIcon={<ArrowBack />}
        onClick={handleGoBack}
        sx={{
          textTransform: 'none',
          fontWeight: 500,
          mb: 3,
        }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default BackButton;
