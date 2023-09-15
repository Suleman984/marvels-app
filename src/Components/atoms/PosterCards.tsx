import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

interface TabData {
  label: string;
  imageSrc: string;
}

const CustomTab = styled(Tab)`
  &:hover {
    cursor: pointer;
    // Add your hover styles here
    // For example, changing background color
    background-color: lightgray;
  }
`;

const HoverBox = styled(Box)`
  &:hover {
    cursor: pointer;
    // Add your hover styles here
    // For example, changing background color
    background-color: lightgray;
  }
`;

function BasicTabs({ cards }: { cards: any[] }) {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabData: TabData[] = cards.map((card, index) => ({
    label: `Tab ${index + 1}`,
    imageSrc: card.imageSrc, // Assuming each card has an 'imageSrc' property
  }));

  return (
    <HoverBox sx={{ width: '100%', backgroundColor: 'whitesmoke', margin: 'auto', height: '200px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          {tabData.map((tab, index) => (
            <CustomTab key={index} label={tab.label} />
          ))}
        </Tabs>
      </Box>
      {/* Content for each tab goes here */}
    </HoverBox>
  );
}

export default BasicTabs;
