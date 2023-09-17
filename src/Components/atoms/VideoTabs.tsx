import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { Youtubelinks } from './Links'; // Import the Youtubelinks array
import VideoTab from './VideoTab';

interface VideoData {
  label: string;
  videoSrc: string;
}

const VideoTabs=()=> {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabData: VideoData[] = Youtubelinks.map((link, index) => ({
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
            <VideoTab key={index} label={tab.label} videoSrc={tab.videoSrc} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

export default VideoTabs;
