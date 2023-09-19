import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { LoginForm } from "./LoginForm"; 

const Heading:React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [isSignInJoinClicked, setIsSignInJoinClicked] = React.useState(false); 
  console.log(isSignInJoinClicked)
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleSignInJoinDoubleClick = () => {
    
    setIsSignInJoinClicked(true);
    console.log("clicked sign in")
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSrc = scrolled
    ? "./Assets/marvels2.jpg"
    : "./Assets/marvels.jpg";

  return (
    <Box sx={{ flexGrow: 1, padding: "0px", height: "8%" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#202020",
          borderBottom: "0.3px solid grey",
          height: "auto",
        }}
        style={{ padding: "0px" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            sx={{
              mb: { xs: 1, sm: 0 },
              textAlign: { xs: "center", sm: "left" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onDoubleClick={handleSignInJoinDoubleClick} 
          >
            SIGN IN | JOIN
          </Typography>
          <Box sx={{ margin: 0 }}>
            <img
              src={logoSrc}
              alt="marvel logo"
              style={{
                maxHeight: "50px",
                maxWidth: "100%",
                height: "auto",
                transition: "src 1s ease",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                display: { xs: "none", sm: "block" },
                mr: { xs: 0, sm: 2 },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              style={{
                borderLeft: "1px solid grey",
                borderRight: "1px solid grey",
                padding: "2px",
              }}
            >
              Marvel Unlimited
              <br />
              Subscribe
            </Typography>
            <Box
              style={{
                padding: "2px 6px",
                height: "100%",
              }}
            >
              <IconButton color="inherit" aria-label="Search">
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {isSignInJoinClicked && <LoginForm />}
    </Box>
  );
};

export default Heading;
