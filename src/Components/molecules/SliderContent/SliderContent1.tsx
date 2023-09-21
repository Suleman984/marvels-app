import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './SliderContent1.css' // Import the CSS file
const SliderContent1: React.FC = () => {
  return (
    <Box width='100%'
      className='container'
      style={{backgroundImage: `url('./Assets/Comics/c1.jpg')`,}}
    >
      <Box className='overlay'>
        {/* <img src="./Assets/Comics/c6.jpg" alt="" width='120px' height='120px'/> */}
        <Typography className='title' variant='h4'>Marvel Comics</Typography>
        <Typography className='description' variant='h3'>This Week's New Comics</Typography>
        <Button
          variant="contained"
          className='button'
          style={{backgroundColor:'red'}}
        >
          See More
        </Button>
      </Box>
    </Box>
  );
};
export default SliderContent1;
