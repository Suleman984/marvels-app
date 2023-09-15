import React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface VideoTabProps {
  label: string;
  videoSrc: string;
}

function VideoTab(props: VideoTabProps) {
  const videoStyle = {
    width: "100%", // Adjust the width as needed
    height: "auto", // Maintain aspect ratio
  };

  return (
    <Tab
      label={
        <Box>
          <iframe
            title={props.label}
            width="100%"
            height="auto"
            src={props.videoSrc}
            frameBorder="0"
            allowFullScreen
            style={videoStyle}
          ></iframe>
          <Typography variant="subtitle1">{props.label}</Typography>
        </Box>
      }
    />
  );
}

export default VideoTab;

