import { Box } from '@mui/material'
import React from 'react'
import { TopLeft } from '../atoms/FooterComponents/TopLeft'
import { TopRight } from '../atoms/FooterComponents/TopRight'
import { FooterLogo } from '../atoms/FooterComponents/FooterBottomComponents/FooterLogo'
import { Nav } from '../atoms/FooterComponents/FooterBottomComponents/Nav'
import { Insider } from '../atoms/FooterComponents/FooterBottomComponents/Insider'
import { FollowIcons } from '../atoms/FooterComponents/FooterBottomComponents/FollowIcons'
import './Styling/Footer.css'
export const Footer = () => {
  return (
    <Box className="boxWrapper">
        <Box className="topComponents">
            <TopLeft/>
            <TopRight/>
        </Box>
        <Box className="bottomWrapper">
        <Box className='logoClass'>
          <FooterLogo />
        </Box>
        <Box className="navStyle">
          <Nav />
        </Box>
        <Box className="insiderStyle">
          <Insider />
        </Box>
        <Box>
          <FollowIcons />
        </Box>
      </Box>
    </Box>
  )
}
