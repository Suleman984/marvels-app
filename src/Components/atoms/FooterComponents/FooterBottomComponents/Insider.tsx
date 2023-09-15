import React from "react";
import { Box, Typography } from "@mui/material";
export const Insider = () => {
  return (
    <Box>
      <Box style={{display:'flex'}}>
        <Box style={{width:'50%'}}>
          <img src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png" alt="Insider Logo" />
        </Box>
        <Box style={{marginLeft:'2%'}}>
            <Typography>MARVEL INSIDER</Typography>
            <Typography>Get Rewarded for Being a Marvel Fan</Typography>
        </Box>
      </Box>
      <Box style={{display:'flex'}}>
        <Box style={{width:'50%'}}>
          <img src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png" alt="Marvel"  width="100%"/>
        </Box>
        <Box style={{marginLeft:'2%'}}>
            <Typography >MARVEL UNLIMITED</Typography>
            <Typography>Access Over 30,000+ Digital Comics</Typography>
        </Box>
      </Box>
      
    </Box>
  );
};


