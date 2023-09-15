import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Logo from "../atoms/Logo";
import { styled, Box } from "@mui/material";

const HoverElement = styled(Typography)`
  &:hover {
    cursor: pointer;
  }
`;

const SignInTypo = styled(Box)`
  height: 100%;
`;

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#202020",
        borderBottom: "0.5px solid grey",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          {/* Left side */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            <SignInTypo>
              <HoverElement>Sign In | Join</HoverElement>
            </SignInTypo>
          </Box>

          {/* Center (MARVEL logo) */}
          <HoverElement
            sx={{
              display: "flex",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Logo path={"./Assets/marvels.jpg"} />
          </HoverElement>

          {/* Right side */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <HoverElement
              sx={{
                display: { xs: "none", md: "block" },
              }}
              style={{ marginRight: "10px" }}
            >
              Marvels unlimited
            </HoverElement>
            <HoverElement>
              <img src="./Assets/searchicon.png" alt="search" />
            </HoverElement>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
