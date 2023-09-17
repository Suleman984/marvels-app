import { Box, List, ListItem, Typography } from "@mui/material";
import { NavData } from "./NavData/NavLists";// Import your data here
import React from "react";
export const Nav = () => {
  return (
    <Box style={{display:'flex'}}>
    <Box>
      <List
        aria-labelledby="basic-list-demo"
        style={{
          listStyle: "none",
          fontFamily: "Roboto,Trebuchet MS,Helvetica,Arial,sans-serif",
          display:'block',
          boxSizing:'border-box'
        }}
      >
      <a href="#" style={{textDecoration:'none',color:'white'}}><ListItem>{NavData[0].text1}</ListItem></a>
      <a href="#" style={{textDecoration:'none',color:'white'}}><ListItem>{NavData[0].text2}</ListItem></a>
      <a href="#" style={{textDecoration:'none',color:'white'}}><ListItem>{NavData[0].text3}</ListItem></a>
      <a href="#" style={{textDecoration:'none',color:'white'}}><ListItem>{NavData[0].text4}</ListItem></a>
      </List>
    </Box>
     <Box>
     <List
       aria-labelledby="basic-list-demo"
       style={{
         listStyle: "none",
         fontFamily: "Roboto,Trebuchet MS,Helvetica,Arial,sans-serif",
         display:'block',
         boxSizing:'border-box'
       }}
     >
     <a href="#" style={{textDecoration:'none',color:'white'}}><ListItem>{NavData[1].text1}</ListItem></a>
      <a href="#" style={{textDecoration:'none',color:'white'}}><ListItem>{NavData[1].text2}</ListItem></a>
      <a href="#" style={{textDecoration:'none',color:'white'}}><ListItem>{NavData[1].text3}</ListItem></a>
      <a href="#" style={{textDecoration:'none',color:'white'}}><ListItem>{NavData[1].text4}</ListItem></a>
     </List>
   </Box>
   </Box>
  );
};
