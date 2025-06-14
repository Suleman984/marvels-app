import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Youtubelinks } from './Links'; // Import the Youtubelinks array

interface TabData {
  label: string;
  videoSrc: string; // Change imageSrc to videoSrc
}

function CustomTab(props: TabData) {
  const videoStyle = {
    width: '100%', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
  };

  return (
    <Tab
      label={
        <Box>
          <iframe
            title={props.label}
            width="100%"
            height="auto"
            src={props.videoSrc} 
            frameBorder="0"
            allowFullScreen
            style={videoStyle}
          ></iframe>
          <Typography variant="subtitle1">{props.label}</Typography>
        </Box>
      }
    />
  );
}

const BasicTabs = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabData: TabData[] = Youtubelinks.map((link, index) => ({
    label: `Video ${index + 1}`,
    videoSrc: link, // Use the YouTube video link from Youtubelinks
    
  }));

  return (
    <Box sx={{ width: '100%', backgroundColor: 'whitesmoke', margin: 'auto', height: '200px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          {tabData.map((tab, index) => (
            <CustomTab key={index} label={tab.label} videoSrc={tab.videoSrc} />
          ))}
        </Tabs>
      </Box>
      
    </Box>
  );
}

export default BasicTabs;
