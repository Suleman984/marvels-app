import React from "react";
import { VideoDesc } from "../../Interfaces/videoDescription";
import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledTypography = styled(Typography)`
  margin: 10px 0; /* Add margin to create spacing */
  text-align: left; /* Center-align the text */
  font-family: "Roboto, sans-serif"; /* Specify the Roboto font family */
  /* You can add more CSS properties as needed */
`;

const Video: React.FC<{ details: VideoDesc }> = ({ details }) => {
  return (
    <Box style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Box style={{ width: "95%", height: "100%", margin: "auto" }}>
        {/* Set a fixed height for the video container */}
        <iframe
  src="https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6336153319112&brand=marvel"
  width="100%"
  height="100%"
  title="marvel"
  scrolling="no" // Add scrolling="no" to remove scrollbars
></iframe>

        `
      </Box>
      <Box style={{ width: "100%", height: "40%" }}>
        {/* Use the StyledTypography component */}
        <Box width="40%" style={{ backgroundColor: "transparent" }}>
          <StyledTypography style={{ fontWeight: "bold" }}>
            {details.mainText}
          </StyledTypography>
          <StyledTypography variant="h6">{details.videoTitle}</StyledTypography>
          <StyledTypography style={{ fontWeight: "bold" }}>
            {details.descText}
          </StyledTypography>
        </Box>
      </Box>
    </Box>
  );
};

export default Video;
