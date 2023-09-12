import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TabData {
  label: string;
  imageSrc: string;
}

function CustomTab(props: TabData) {
  const imageStyle = {
    width: '100px',
    height: '120px',
    opacity: 1, // Adjust the opacity as needed
  };

  return (
    <Tab
      label={
        <Box>
          <img
            src={props.imageSrc}
            alt={props.label}
            style={imageStyle}
          />
          <Typography variant="subtitle1">{props.label}</Typography>
        </Box>
      }
    />
  );
}

function BasicTabs() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabData: TabData[] = [
    { label: 'Tab 1', imageSrc: './Assets/marvels2.jpg' },
    { label: 'Tab 2', imageSrc: './Assets/marvels3.jpg' },
    { label: 'Tab 3', imageSrc: './Assets/marvels4.jpg' },
    { label: 'Tab 4', imageSrc: './Assets/marvels2.jpg' },
    { label: 'Tab 5', imageSrc: './Assets/marvels3.jpg' },
    { label: 'Tab 6', imageSrc: './Assets/marvels4.jpg' },
    { label: 'Tab 7', imageSrc: './Assets/marvels2.jpg' },
    { label: 'Tab 8', imageSrc: './Assets/marvels2.jpg' },
    { label: 'Tab 9', imageSrc: './Assets/marvels2.jpg' },
    { label: 'Tab 10', imageSrc: './Assets/marvels2.jpg' },
    { label: 'Tab 11', imageSrc: './Assets/marvels2.jpg' },
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
            <CustomTab key={index} label={tab.label} imageSrc={tab.imageSrc} />
          ))}
        </Tabs>
      </Box>
      {/* Content for each tab goes here */}
    </Box>
  );
}

export default BasicTabs;
