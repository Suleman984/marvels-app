import { Box, Typography } from '@mui/material'
import React from 'react'
import { SocialIcon } from 'react-social-icons'; // Import the SocialIcon component

export const FollowIcons = () => {
  return (
    <Box style={{display:'flex',flexDirection:'column',width:'100%'}}> 
      <Box style={{margin:'auto',textAlign:'center',marginBottom:'3%'}}>
        <Typography>FOLLOW MARVEL</Typography>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'space-between',marginRight:'1%' }}>
        {/* Use the SocialIcon component here */}
        <SocialIcon url="https://twitter.com" />
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://twitter.com" />
      </Box>
    </Box>
  )
}
