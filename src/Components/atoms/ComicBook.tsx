import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import StyledButton from "./StyledButton"; // Import StyledButton from the correct path



const getRandomTime = () => {
  // Generate a random number between 1 and 7 for days
  const randomDays = Math.floor(Math.random() * 7) + 1;

  // Generate a random number between 1 and 23 for hours
  const randomHours = Math.floor(Math.random() * 23) + 1;

  return `${randomDays} days, ${randomHours} hours ago`;
};

const HoverElement = styled(Typography)`
  color: inherit; /* Use the same color as the parent (initial color) */
  &:hover {
    color: red;
    cursor: pointer; /* Optional: Change cursor to a pointer on hover */
  }
`;

const ComicBook = () => {
  const randomTime = getRandomTime();

  return (
    <>
      <Box style={{ display: "flex",  width: "100%", height: "200px" }}>
        <img src="./Assets/marvels2.jpg" alt="Comics" width="300px" height="100%" />
        <Box marginLeft="16px">
          <Typography>Comics</Typography>
          <HoverElement variant="h5">
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Hello Comic World</a>
          </HoverElement>
          <Typography variant="subtitle1">{randomTime}</Typography>
        </Box>
      </Box>
      <hr />
      <Box style={{margin:'auto',marginLeft:'300px'}}>
        <StyledButton/>
      </Box>
    </>
  );
};

export default ComicBook;
