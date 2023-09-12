import { Box, Typography } from "@mui/material";
import React from "react";
const getRandomTime = () => {
    // Generate a random number between 1 and 7 for days
    const randomDays = Math.floor(Math.random() * 7) + 1;
  
    // Generate a random number between 1 and 23 for hours
    const randomHours = Math.floor(Math.random() * 23) + 1;
  
    return `${randomDays} days, ${randomHours} hours ago`;
  };
const ComicBook = () => {
    const randomTime = getRandomTime();
  return (
  <>
    <Box style={{ display: "flex",  width: "100%", height: "200px" }}>
      <img src="./Assets/marvels2.jpg" alt="Comics" width="300px" height="100%" />
      <Box marginLeft="16px">
        <Typography>Comics</Typography>
        <Typography variant="h5"><a href="#">Hello Comic World</a></Typography>
        <Typography variant="subtitle1">{randomTime}</Typography>
      </Box>
      
    </Box>
    <hr /></>
  );
};

export default ComicBook;
