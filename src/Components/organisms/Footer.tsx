import { Box } from '@mui/material'
import React from 'react'
import { TopLeft } from '../atoms/FooterComponents/TopLeft'
import { TopRight } from '../atoms/FooterComponents/TopRight'
import { FooterLogo } from '../atoms/FooterComponents/FooterBottomComponents/FooterLogo'
import { NavData } from '../atoms/FooterComponents/FooterBottomComponents/NavData/NavLists'
import { Nav } from '../atoms/FooterComponents/FooterBottomComponents/Nav'
import { Insider } from '../atoms/FooterComponents/FooterBottomComponents/Insider'
import { FollowIcons } from '../atoms/FooterComponents/FooterBottomComponents/FollowIcons'
export const Footer = () => {
  return (
    <Box style={{width:'100%',height:'100vh'}}>
        <Box style={{display:'flex',width:'100%',height:'50%'}}>
            <TopLeft/>
            <TopRight/>
        </Box>
        <Box style={{display:'flex',width:'100%',height:'50%',backgroundColor:'#202020',color:'white'}}>
            
            <Box width="25%" style={{marginTop:'5%',marginLeft:'2%'}}>
            <FooterLogo/>
            </Box >
            <Box width="25%" style={{marginTop:'5%',marginLeft:'3%'}}>
            <Nav/>
            </Box>
            <Box  width="30%"style={{marginTop:'5%',marginLeft:'5%'}}>
              <Insider/>
            </Box>
            <Box  width="20%" style={{marginTop:'5%',marginLeft:'5%'}}>
              
              <FollowIcons/>
            </Box>
            
            

        </Box>
    </Box>
  )
}
