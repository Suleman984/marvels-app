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
      <CardContent
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px", // Equal spacing between boxes
          flexWrap: "wrap", // Wrap boxes to the next line if they don't fit horizontally
        }}
      >
        {/* Map through the comics data and display the first 10 comics */}
        {comicsToDisplay.map((comic, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center align content
              maxWidth: "100px", // Limit the maximum width
            }}
          >
            <img
              src={imageUrl}
              alt="cardImage"
              style={{ maxWidth: "100%", height: "auto", maxHeight: "200px" }} // Maintain aspect ratio
            />
            <Typography component="div" style={{ marginTop: "5px" }}>
              {comic.name}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardImages;
