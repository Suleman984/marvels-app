import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './SliderContent1.css' // Import the CSS file
const SliderContent2: React.FC = () => {
  return (
    <Box width='100%'
      className='container'
      style={{backgroundImage: `url('./Assets/Comics/c6.jpg')`,}}
      
    >
      <Box className='overlay'>
        {/* <img src="./Assets/Comics/c2.jpeg" alt="" width='120px' height='120px'/> */}
        <Typography className='title' variant='h4'>Groot</Typography>
        <Typography className='description' variant='h3'>Hello Groot</Typography>
        <Box style={{display:'grid',width:'100%',gap:'10px'}} >
        <Button
          variant="contained"
          className='button'
          style={{backgroundColor:'red'}}
        >
          Watch Now
        </Button>
        <Button
          variant="contained"
          className='button'
          style={{backgroundColor:'red'}}
          
        >
            I am Groot
        </Button>
        
        </Box>
        
      </Box>
    </Box>
  );
};
export default SliderContent2;
