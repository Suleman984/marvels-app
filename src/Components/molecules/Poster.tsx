import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PosterLogo from "../atoms/PosterLogo";
import styled from "@emotion/styled";
import PosterInnerBox from "../atoms/PosterInnerBox";
import CardImages from "../atoms/CardImages";
import PosterCards from "../atoms/PosterCards";
import { PosterTypes } from "../../Interfaces/PosterInterfaces";

const PosterBox = styled(Box)`
  width: 100%;
  min-height: 100vh;
  background-image: url(./Assets/marvelbackground.jpg);
  background-size: cover;
  overflow-x: hidden;
  position: relative; /* Add this line */
  z-index: 1; /* Add this line to set the z-index */
`;

export const Poster:React.FC<{ poster: PosterTypes }> = ({poster}) => {
  return (
    <>
      <PosterBox>
        <Box
          style={{
            position: "relative",
            top: "150px",
            left: "70px",
          }}
        >
          <PosterLogo />
          <PosterInnerBox poster={poster}/>
        </Box>
        <Box style={{ width: '90%', margin: 'auto', marginTop: "200px" }}>
          <PosterCards />
        </Box>
      </PosterBox>
    </>
  );
};
