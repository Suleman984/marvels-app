import React from 'react'
import { Typography,Button, Box } from '@mui/material'
import { PosterTypes } from '../../Interfaces/PosterInterfaces'

const PosterInnerBox:React.FC<{poster:PosterTypes}> = ({poster}) => {
  return (
    
    <Box width='50%'>
      <Typography variant="h4" style={{ color: "white",marginTop:'20px',marginBottom:'20px' }}>{poster.mainText}</Typography>
        <Typography variant="h3" style={{ color: "white",width:'100%' }}>
          {poster.mainHeading}
        </Typography>
        <Typography variant="h6" style={{ color: "white",marginBottom:'20px' }}>
          {poster.text}
        </Typography>
        <Button variant="outlined" style={{ color: "white", borderColor: "grey" }}>
          Get Marvel UnLimited
        </Button>
    </Box>
        
  )
}
export default PosterInnerBox;
