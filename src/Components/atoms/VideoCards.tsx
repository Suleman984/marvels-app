import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
          <video
            src={props.videoSrc} // Use videoSrc instead of imageSrc
            controls // Add controls for video playback
            style={videoStyle}
          />
          <Typography variant="subtitle1">{props.label}</Typography>
        </Box>
      }
    />
  );
}

const BasicTabs=()=> {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabData: TabData[] = [
    { label: 'rollin 1', videoSrc: './Assets/rollin.mp4' }, // Provide video sources
    { label: 'rollin 2', videoSrc: './Assets/rollin.mp4' },
    { label: 'rollin 2', videoSrc: './Assets/rollin.mp4' },
    { label: 'Gym 2', videoSrc: './Assets/rollin.mp4' },
    { label: 'Gym 2', videoSrc: './Assets/rollin.mp4' },
    { label: 'Gym 2', videoSrc: './Assets/rollin.mp4' },
    { label: 'Gym 2', videoSrc: './Assets/rollin.mp4' },
    { label: 'Gym 2', videoSrc: './Assets/rollin.mp4' },
    { label: 'Gym 2', videoSrc: './Assets/rollin.mp4' },
    // Add more tab data with video sources
  ];

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
      {/* Content for each tab goes here */}
    </Box>
  );
}

export default BasicTabs;
