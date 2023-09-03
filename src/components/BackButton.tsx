import React, { useContext } from 'react';
import { Button, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { createBrowserHistory } from 'history';
import { ATMContext } from '../context/ATMContext';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string,
  customUrl?: string
}

const BackButton: React.FC<ButtonProps> = ({ text, customUrl }) => {
  const { setError } = useContext(ATMContext)
  const history = createBrowserHistory();
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    setError(false);
    if (customUrl) {
      navigate(customUrl);
    } else {
      history.back();
    }
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
