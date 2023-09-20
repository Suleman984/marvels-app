import { Box, Typography, Button } from "@mui/material";
import React from "react";
import MovieDisplay from "../atoms/ItemPagination";
export const ItemDisplay: React.FC<{
  imageSrc: string;
  newsTitles: string;
  newsDescriptions: string;
}> = ({ imageSrc, newsTitles, newsDescriptions }) => {
  return (
    <Box>
      <Box>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.bookmyshow.com%2Fmovies%2Fant-man-and-the-wasp-quantumania%2FET00302402&psig=AOvVaw2cZyvdhHjh32H7SdSowLzB&ust=1695214076841000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKjW7NnatoEDFQAAAAAdAAAAABAE"
          alt=""
        />
        <Box>
          <Button variant="outlined">GET IT NOW</Button>
          <Button variant="outlined">STREAM ON DISNEY+</Button>
        </Box>
      </Box>
      <Box>
        <Typography>OFFICIAL TRAILER</Typography>
        <Box>
          <iframe
            width="1200"
            height="700"
            src="https://www.youtube.com/embed/ZlNFpri-Y40"
            title="Marvel Studios’ Ant-Man and The Wasp: Quantumania | Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
      </Box>
      <Box>
        <Typography>LATEST NEWS</Typography>
        <MovieDisplay/>
      </Box>
    </Box>
  );
};
