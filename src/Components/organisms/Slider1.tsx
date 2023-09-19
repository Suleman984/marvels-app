import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Styling/slider1.css"; // Import the CSS file

const imagePaths = [
  "./Assets/marvels.jpg",
  "./Assets/marvels3.jpg",
  "./Assets/marvels4.jpg",
];

export const Slider1: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextImageIndex = (currentImageIndex + 1) % imagePaths.length;
      setCurrentImageIndex(nextImageIndex);
    }, 2000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <Box className="Slider1Container"> 
      <img
        src={imagePaths[currentImageIndex]}
        alt="marvels"
        className="Slider1Image" 
      />
    </Box>
  );
};
