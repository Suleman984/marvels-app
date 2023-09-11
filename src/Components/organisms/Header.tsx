import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Logo from "../atoms/Logo";
import { styled,Box } from "@mui/material";
const Pages = ["Sign In ", " Sign Up"];
const HoverElement=styled(Typography)`
&:hover {
    cursor: pointer;
  }
`
const SignInTypo=styled(Box)`
height:100%;`
function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#202020",borderBottom:'0.5px solid grey' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{display:'flex',justifyContent:'center'}}>
          {/* {Pages.map((page) => (
            <>
              <HoverElement textAlign="center">{page}</HoverElement>
            </>
          ))} */}
          <SignInTypo ><HoverElement  >Sign In | Join</HoverElement></SignInTypo>
          <HoverElement style={{ textAlign: "center" }}>
            <Logo path={"./Assets/marvels.jpg"} />
          </HoverElement>
          <HoverElement
            style={{ textAlign: "left",paddingLeft: "10px", paddingRight: "10px",marginRight:'10px', borderLeft:'1px solid grey', borderRight:'1px solid grey',marginLeft:'50px' }}
            
          >
            Marvels unlimited <br />
            Subscribe
          </HoverElement>
          <HoverElement style={{ textAlign: "right", paddingRight:'5px',marginLeft:'10px' }}>
            <img src="./Assets/searchicon.png" alt="search" />
          </HoverElement>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;