import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import StyledButton from '../StyledButton';

export const TopRight = () => {
  return (
    <Box
      style={{
        position: 'relative',
        margin: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        width: '50%',
        height: '100%',
        justifyContent: 'center', // Center vertically
        alignItems: 'center',     // Center horizontally
      }}
    >
      <Box style={{ textAlign: 'center' }}>
        <Typography color='Red' variant='h5'>MARVEL INSIDER</Typography>
        <Typography color='white' variant='h5'>WATCH, EARN, REDEEM!</Typography>
        <Typography color='white' variant='h5'>Get rewarded for doing what you already do as a fan</Typography>
        <Button style={{color:'white',backgroundColor:'red',padding:'5px 15px'}}>JOIN NOW</Button>
      </Box>
      <Box style={{ position: 'absolute', bottom: '0px', margin: 'auto' }}>
        <Typography color='white'>Terms and Condition Apply</Typography>
      </Box>
    </Box>
  );
}
