import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
const HoverElement=styled(Typography)`
&:hover {
    cursor: pointer;
    
  }
`
function Tagline() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#202020"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{display:'flex',justifyContent:'center'}}>
         <HoverElement style={{}}>STREAM GUARDIANS OF THE GALAXY VOL. 3 EXCLUSIVE ON DISNEP+</HoverElement>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Tagline;
