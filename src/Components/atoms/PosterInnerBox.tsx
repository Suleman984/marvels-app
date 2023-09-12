import React from 'react'
import { Typography,Button } from '@mui/material'
const PosterInnerBox = () => {
  return (
    <>
    <Typography variant="h4" style={{ color: "white",marginTop:'20px',marginBottom:'20px' }}>Available Now</Typography>
        <Typography variant="h3" style={{ color: "white" }}>
          NEW ON MARVEL UNLIMITED
        </Typography>
        <Typography variant="h6" style={{ color: "white",marginBottom:'20px' }}>
          Read these plus 30,000+ digital comics for $9.99 a month!
        </Typography>
        <Button variant="outlined" style={{ color: "white", borderColor: "white" }}>
          Get Marvel UnLimited
        </Button></>
  )
}
export default PosterInnerBox;
