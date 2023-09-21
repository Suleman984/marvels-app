import { Box, Typography, Button } from "@mui/material";
import React from "react";
import MovieDisplay from "../atoms/MovieDisplay";
 const ItemDisplay: React.FC<{
  imageSrc: string;
  newsTitles: string;
  newsDescriptions: string;
}> = ({ imageSrc, newsTitles, newsDescriptions }) => {
  return (
    <Box width='100%'>
      <Box>
        <img
          src="./Assets/Movies/black panther.jpg"
          alt=""
        />
        <Box>
          <Button variant="outlined">GET IT NOW</Button>
          <Button variant="outlined">STREAM ON DISNEY+</Button>
        </Box>
      </Box>
      <Box width='100%'>
        <Typography>OFFICIAL TRAILER</Typography>
        <Box width='100%'>
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
        <Box style={{display:'flex',justifyContent:'center',width:'100%',alignItems:'center',margin:'auto'}}>
        <MovieDisplay/>
        </Box>
      </Box>
    </Box>
  );
};
export default  ItemDisplay;
