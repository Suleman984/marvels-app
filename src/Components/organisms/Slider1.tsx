import { Box } from '@mui/material'
import React from 'react'
import { useEffect,useState } from 'react';
const imagePaths = [
    "./Assets/marvels.jpg",
    "./Assets/marvels3.jpg",
    "./Assets/marvels4.jpg",
  ];
export const Slider1:React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          // Calculate the index for the next image
          const nextImageIndex = (currentImageIndex + 1) % imagePaths.length;
          setCurrentImageIndex(nextImageIndex);
        }, 2000); // Change image every 2 seconds
    
        // Clear the timer when the component unmounts
        return () => clearInterval(timer);
      }, [currentImageIndex]);
  return (
    <Box>
         <img
        src={imagePaths[currentImageIndex]}
        alt="marvels"
        width="100%"
        height="470vh"
      />
    </Box>
  )
}
