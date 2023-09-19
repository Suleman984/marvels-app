import { Box, Typography, Button} from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const ItemDisplay:React.FC<{imageSrc:string,title:string,description:string}> = ({ imageSrc, title, description }) => {
  return (
    <Box>
      <Box>
        <img src="" alt="" />
        <Box>
          <Button>Click Me</Button>
          <Button>Click Me2</Button>
        </Box>
      </Box>
      <Box>
        <Typography>OFFICIAL TRAILER</Typography>
        <Box>
          <iframe
            width="1200"
            height="700"
            src="https://www.youtube.com/embed/ZlNFpri-Y40"
            title="Marvel Studios’ Ant-Man and The Wasp: Quantumania | Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
      </Box>
      <Box>
        <Typography>LATEST NEWS</Typography>
        <Card>
          <img
            src={imageSrc}
            alt={title}
            style={{ width: "100%", height: "auto" }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
