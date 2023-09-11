import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PosterLogo from "../atoms/PosterLogo";
import styled from "@emotion/styled";

const PosterBox = styled(Box)`
  width: 100%;
  height: 100%;
  background-image: url(./Assets/marvelbackground.jpg);
  background-size: cover;
`;

const contentBoxStyles = {
  position: "absolute",
  top: "150px", // Adjust the value to move the Box below
  left: "100px",
};

export const Poster = () => {
  return (
    <PosterBox style={{position:'absolute'}}>
      <Box
        style={{
          position: "relative",
          top: "200px", // Adjust the value to move the Box below
          left: "70px",
        }}
      >
        <PosterLogo />
        <Typography variant="h4" style={{ color: "white",marginTop:'20px',marginBottom:'20px' }}>Available Now</Typography>
        <Typography variant="h3" style={{ color: "white" }}>
          NEW ON MARVEL UNLIMITED
        </Typography>
        <Typography variant="h6" style={{ color: "white",marginBottom:'20px' }}>
          Read these plus 30,000+ digital comics for $9.99 a month!
        </Typography>
        <Button variant="outlined" style={{ color: "white", borderColor: "white" }}>
          Get Marvel UnLimited
        </Button>
      </Box>
    </PosterBox>
  );
};
