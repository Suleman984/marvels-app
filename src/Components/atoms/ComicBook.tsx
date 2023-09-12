import { Box, Typography } from "@mui/material";
import React from "react";

 const ComicBook = () => {
  return (
    <Box style={{ width: "300px", height: "300px"}}>
      <img src="./Assets/marvel2.jpg" alt="Comics" width="100%" height="100%" />
      <Box>
        <Typography >Comics</Typography>
        <Typography variant="h5">Heelo Comic World</Typography>
      </Box>
    </Box>
  );
};
export default ComicBook;
