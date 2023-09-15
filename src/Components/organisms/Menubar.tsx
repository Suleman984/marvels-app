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
const   comicHeadings=['Deadpool','Avengers','Marvel Premiere']
const   storiesHeadings=['Flash','Arrow','Savitar']
const   seriesHeadings=['Cover','The 3-D','Avengers Infinity']

const Menubar: React.FC<{ comics: any[], series: any[], stories: any[] }> = ({ comics, series, stories }) => {
  const [isDisplayCardsVisible, setIsDisplayCardsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null); // State to track the active category

  const handleMenuHover = (category: string) => {
    setIsDisplayCardsVisible(true);
    setActiveCategory(category); // Set the active category when hovering
  };

  const handleDisplayCardsLeave = () => {
    setIsDisplayCardsVisible(false);
    setActiveCategory(null); // Reset the active category when leaving
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
              onMouseEnter={() => handleMenuHover("stories")} // Handle hover for stories
            >
              Stories
            </HoverElement>
            <HoverElement
              style={{ marginRight: "15px", marginBottom: "25px" }}
              onMouseEnter={() => handleMenuHover("comics")} // Handle hover for comics
            >
              Comics
            </HoverElement>
            <HoverElement
              style={{ marginRight: "15px", marginBottom: "25px" }}
              onMouseEnter={() => handleMenuHover("series")} // Handle hover for series
            >
              Series
            </HoverElement>
          </Toolbar>
        </Container>
      </AppBar>
      {isDisplayCardsVisible && (
        <Box>
          {/* Pass the appropriate data based on the active category */}
          {activeCategory === "comics" && <DisplayCards data={comics} headings={comicHeadings}/>}
          {activeCategory === "stories" && <DisplayCards data={stories} headings={storiesHeadings}/>}
          {activeCategory === "series" && <DisplayCards data={series} headings={seriesHeadings}/>}
        </Box>
      )}
    </Box>
  );
};

export default Menubar;
