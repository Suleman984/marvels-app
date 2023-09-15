import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const imageUrl = "./Assets/marvels2.jpg";

const CardImages: React.FC<{ comics: any[] }> = ({ comics }) => {
  // Use slice to get the first 10 comics
  const comicsToDisplay = comics.slice(0, 10);

  return (
    <Card sx={{ minWidth: 275 }} style={{ marginTop: "50px" }}>
      <CardContent style={{ display: "flex", justifyContent: "center" }}>
        {/* Map through the comics data and display the first 10 comics */}
        {comicsToDisplay.map((comic, index) => (
          <Box key={index} sx={{ marginRight: "30px" }}>
            <img
              src={imageUrl}
              alt="cardImage"
              style={{ maxWidth: "100px", height: "200px" }}
            />
            <Typography  component="div">
              {comic.name}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardImages;
