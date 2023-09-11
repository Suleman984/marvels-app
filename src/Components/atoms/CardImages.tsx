import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
// Replace this with the URL of your desired image
const imageUrl = './Assets/marvels3.jpg';

const CardImages: React.FC = () => {
  return (
    <Card sx={{ minWidth: 275 }} style={{marginTop:'50px'}}>
      <CardContent style={{display:'flex',justifyContent:'center'}}>
        <Box sx={{ marginRight: '30px'}} >
        <img src={imageUrl} alt="cardImage" style={{ maxWidth: '100px',height:'200px' }} />
        <Typography variant="h5" component="div">
        Your Name
        </Typography>
        </Box>
        <Box sx={{ marginRight: '30px' }}>
        <img src={imageUrl} alt="cardImage" style={{ maxWidth: '100px',height:'200px' }} />
        <Typography variant="h5" component="div">
        Your Name
        </Typography>
        </Box>
        <Box sx={{ marginRight: '30px' }}>
        <img src={imageUrl} alt="cardImage" style={{ maxWidth: '100px',height:'200px' }} />
        <Typography variant="h5" component="div">
        Your Name
        </Typography>
        </Box>
        <Box sx={{ marginRight: '30px' }}>
        <img src={imageUrl} alt="cardImage" style={{ maxWidth: '100px',height:'200px' }} />
        <Typography variant="h5" component="div">
        Your Name
        </Typography>
        </Box>
        <Box sx={{ marginRight: '30px' }}>
        <img src={imageUrl} alt="cardImage" style={{ maxWidth: '100px',height:'200px' }} />
        <Typography variant="h5" component="div">
        Your Name
        </Typography>
        </Box>
        <Box sx={{ marginRight: '10px' }}>
        <img src={imageUrl} alt="cardImage" style={{ maxWidth: '100px',height:'200px' }} />
        <Typography variant="h5" component="div">
        Your Name
        </Typography>
        </Box>
        
          
      </CardContent>
    </Card>
  );
};

export default CardImages;
