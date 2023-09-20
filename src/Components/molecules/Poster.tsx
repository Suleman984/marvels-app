import React from "react";
import { Box, } from "@mui/material";
import PosterLogo from "../atoms/PosterLogo";
import PosterInnerBox from "../atoms/PosterInnerBox";
import PosterCards from "../atoms/PosterCards";
import { PosterTypes } from "../../Interfaces/PosterInterfaces";
export const Poster: React.FC<{ poster: PosterTypes,cards:any }> = ({ poster,cards }) => {
  const imgSource: string = poster.imgSrc;
  console.log(cards)
  console.log("first")
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
          <PosterCards cards={cards}/>
        </Box>
      </Box>
    </>
  );
};
