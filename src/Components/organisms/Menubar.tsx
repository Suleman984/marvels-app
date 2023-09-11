import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import DisplayCards from "../molecules/DisplayCards";
import Tagline from "../atoms/Tagline"; // Import your Tagline component
import { Slider1 } from "../organisms/Slider1";


const HoverElement = styled(Typography)`
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid red;
  }
`;

const Menubar: React.FC = () => {
  const [isDisplayCardsVisible, setIsDisplayCardsVisible] = useState(false);

  const handleMenuHover = () => {
    setIsDisplayCardsVisible(true);
  };

  const handleDisplayCardsLeave = () => {
    setIsDisplayCardsVisible(false);
  };

  return (
    <Box onMouseLeave={handleDisplayCardsLeave}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#202020",
          borderBottom: "0.5px solid grey",
          height: "6vh",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            style={{ display: "flex", justifyContent: "center" }}
          >
            <HoverElement
              style={{ marginRight: "15px", marginBottom: "25px" }}
              onMouseEnter={handleMenuHover}
            >
              Characters
            </HoverElement>
            <HoverElement
              style={{ marginRight: "15px", marginBottom: "25px" }}
              onMouseEnter={handleMenuHover}
            >
              Comics
            </HoverElement>
            <HoverElement
              style={{ marginRight: "15px", marginBottom: "25px" }}
              onMouseEnter={handleMenuHover}
            >
              Movies
            </HoverElement>
          </Toolbar>
        </Container>
      </AppBar>
      {isDisplayCardsVisible ? (
        <div>
          <DisplayCards />
        </div>
      ) : (
        <div>
          <Tagline /> {/* Show Tagline when not hovering over DisplayCards */}
          <Slider1 /> {/* Show Slider1 when not hovering over DisplayCards */}
        </div>
      )}
    </Box>
  );
};

export default Menubar;
