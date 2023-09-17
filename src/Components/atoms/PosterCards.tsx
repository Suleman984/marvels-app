import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { comicNames } from "../ImageAddresses";
import { ComicAddresses } from "../ImageAddresses";
interface TabData {
  label: string;
  imageSrc: string;
}

const CustomTab = (props: TabData) => {
  const imageStyle = {
    width: "100px",
    height: "120px",
    opacity: 1, // Adjust the opacity as needed
  };

  const tabStyle = {
    marginBottom: "5px", // Initial marginBottom
  };
  const imageHoverStyle = {
    cursor: "pointer", // Change cursor to pointer on hover over the image
  };

  return (
    <Tab
      label={
        <Box style={tabStyle}>
          <img
            src={props.imageSrc}
            alt={props.label}
            style={{
              ...imageStyle,
              ...imageHoverStyle, // Apply hover style
            }}
            className="image-hover" // Add a class to the image
          />
          <Typography
            variant="subtitle1"
            style={{
              transition: "color 0.5s",
              color: "black",
            }}
          >
            {props.label}
          </Typography>
        </Box>
      }
    />
  );
};

const BasicTabs = ({ cards }: { cards: any[] }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabData: TabData[] = cards.map((card, index) => ({
    label: `Tab ${index + 1}`,
    imageSrc: card.imageSrc, // Assuming each card has an 'imageSrc' property
  }));

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        margin: "auto",
        height: "200px",
        opacity:'1',
        
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          {tabData.map((tab, index) => (
            <CustomTab
              key={index}
              label={comicNames[index]}
              imageSrc={ComicAddresses[index]}
            />
          ))}
        </Tabs>
      </Box>
      {/* Content for each tab goes here */}
    </Box>
  );
};

export default BasicTabs;
