import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Styling/slider1.css"; // Import the CSS file
import SliderContent1 from "../molecules/SliderContent/SliderContent1";
import SliderContent2 from "../molecules/SliderContent/SliderContent2";

const sliderComponents = [SliderContent1, SliderContent2]; // Array of slider components
const interval = 2000; // Interval between slider transitions in milliseconds

export const Slider1: React.FC = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextComponentIndex = (currentComponentIndex + 1) % sliderComponents.length;
      setCurrentComponentIndex(nextComponentIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [currentComponentIndex]);

  const SliderComponent = sliderComponents[currentComponentIndex];

  return (
    <Box className="Slider1Container">
      <Box className="SliderComponentWrapper">
        <Box className="SliderComponent">
        <SliderComponent />
        </Box>
        
      </Box>
    </Box>
  );
};
