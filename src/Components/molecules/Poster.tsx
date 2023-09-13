import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PosterLogo from "../atoms/PosterLogo";
import styled from "@emotion/styled";
import PosterInnerBox from "../atoms/PosterInnerBox";
import PosterCards from "../atoms/PosterCards";
import { PosterTypes } from "../../Interfaces/PosterInterfaces";

export const Poster: React.FC<{ poster: PosterTypes }> = ({ poster }) => {
  const imgSource: string = poster.imgSrc;
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${poster.backgroundImage})`,
          backgroundSize: "cover",
          overflowX: "hidden",
          position: "relative" /* Add this line */,
          zIndex: 1,
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Box
          style={{
            position: "relative",
            top: "150px",
            left: "70px",
          }}
        >
          <PosterLogo logoSource={imgSource} />
          <PosterInnerBox poster={poster} />
        </Box>
        <Box style={{ width: "90%", margin: "auto", marginTop: "200px" }}>
          <PosterCards />
        </Box>
      </Box>
    </>
  );
};
