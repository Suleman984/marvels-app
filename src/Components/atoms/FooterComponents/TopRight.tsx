import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import './topRight.css'; // Import the CSS file

export const TopRight = () => {
  return (
    <Box className="TopRightContainer">
      <Box className="TopRightContent">
        <Typography color='Red' variant='h5'>MARVEL INSIDER</Typography>
        <Typography color='white' variant='h5'>WATCH, EARN, REDEEM!</Typography>
        <Typography color='white' variant='h5'>Get rewarded for doing what you already do as a fan</Typography>
        <Button className="TopRightButton">JOIN NOW</Button>
      </Box>
      <Box className="TopRightTerms">
        <Typography>Terms and Condition Apply</Typography>
      </Box>
    </Box>
  );
}
