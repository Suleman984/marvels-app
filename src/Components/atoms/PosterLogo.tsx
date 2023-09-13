import React from 'react'
import { Box, Typography } from '@mui/material'

const PosterLogo:React.FC<{logoSource:string}> = (props) => {
 
 
  return (
    <Box >
      {/* Your content goes here */}
      <Box >
        <img src={props.logoSource} alt="posterlogo" width='auto'/>
        
      </Box>
    </Box>
  )
}
export default PosterLogo;

