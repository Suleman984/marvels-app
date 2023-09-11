import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const HoverElement = styled(Typography)`
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid red;
  }
`;

interface MenubarProps {
  onShowDisplayCards: (show: boolean) => void;
}

const Menubar: React.FC<MenubarProps> = ({ onShowDisplayCards }) => {
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const handleMenuHover = () => {
    setIsMenuHovered(true);
    onShowDisplayCards(true);
  };

  const handleMenuLeave = () => {
    setIsMenuHovered(false);
    onShowDisplayCards(false);
  };

  return (
    <Box onMouseLeave={handleMenuLeave}>
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
    </Box>
  );
};

export default Menubar;
