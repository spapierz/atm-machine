import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const boxStyles = {
  display: 'flex', 
  alignItems: "center",
  justifyContent: "center",
};

const logoStyles = {
  maxWidth: '225px',
  height: 'auto',
  padding: '2rem 0px 2rem',
  cursor: 'pointer'
};

const Header: React.FC = () => {
  const navigate = useNavigate();
  const logo = '/mock-bank-logo.png';

  return (
    <Box sx={boxStyles}>
      <img
        src={logo}
        alt="Back to Enter Your PIN Screen"
        width="225px"
        height="300px"
        style={logoStyles}
        onClick={() => navigate('/')}
      />
    </Box>
  );
};

export default Header;
