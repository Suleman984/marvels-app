import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled'; // Import styled from styled-components

interface NavbarProps {
  headings: string[];
}

// Define a styled component for the headings with hover effect
const StyledHeading = styled(Typography)`
  margin: 0 20px;
  cursor: pointer;

  &:hover {
    color: red; /* Change the color to your desired hover color */
    /* Add any other styles you want for the hover effect */
  }
`;

const CardMenuBar: React.FC<NavbarProps> = ({ headings }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
      <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {headings.map((heading, index) => (
          <StyledHeading key={index} variant="h6">
            {heading}
          </StyledHeading>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default CardMenuBar;
