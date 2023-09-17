import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const imageUrl = "./Assets/marvels2.jpg";

const CardImages: React.FC<{ apidata: any[]; images: string[] }> = ({
  apidata,
  images,
}) => {
  // Use slice to get the first 10 comics
  const comicsToDisplay = apidata.slice(0, 10);

  return (
    <Card sx={{ minWidth: 275 }} style={{ marginTop: "50px" }}>
      <CardContent
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          boxShadow: "0px 4px 6px rgba(0, 100, 200, 0.1)",
        }}
      >
        {comicsToDisplay.map((comic, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "100px",
              cursor: "pointer",
            }}
          >
            <img
              src={images[index]}
              alt="cardImage"
              style={{
                maxWidth: "100%",
                height: "200px", // Set a fixed height for all images
                objectFit: "cover", // Maintain aspect ratio while covering the fixed height
              }}
            />
            <Typography
              component="div"
              style={{
                marginTop: "5px",
                color: "black",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "red";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "black";
              }}
            >
              {comic.name}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardImages;
