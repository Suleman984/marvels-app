import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const getRandomTime = () => {
  // Generate a random number between 1 and 7 for days
  const randomDays = Math.floor(Math.random() * 7) + 1;

  // Generate a random number between 1 and 23 for hours
  const randomHours = Math.floor(Math.random() * 23) + 1;

  return `${randomDays} days, ${randomHours} hours ago`;
};

const HoverElement = styled(Typography)`
  color: inherit;

  a {
    color: black; /* Default text color for the anchor element */
    text-decoration: none;

    &:hover {
      color: red; /* Text color when hovering the anchor element */
      cursor: pointer;
    }
  }
`;

const ComicBook: React.FC<{ comics: any }> = ({ comics }) => {
  const randomTime = getRandomTime();

  return (
    <Box width="100%">
      <Typography variant="h5" marginLeft="8%">
        THE LATEST
      </Typography>
      <Box style={{ display: "flex", flexDirection: "column", width: "100%",marginBottom:'10px' }}>
        {comics.map((comic: any, index: number) => (
          <Box
            key={index}
            style={{
              display: "flex",
              width: "100%",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              // backgroundColor: "#f4f4f4", // Add your shadow styles here
            }}
          >
            <Box marginLeft="10%">
              <img
                src="./Assets/marvels2.jpg"
                alt={comic.name}
                width="300px"
                height="200px"
              />
            </Box>
            <Box marginLeft="16px">
              <Typography>{comic.name}</Typography>
              <HoverElement variant="h5">
                <a href="www.marvel.com" style={{ textDecoration: "none" }}>
                  Hello Comic World
                </a>
              </HoverElement>
              <Typography variant="subtitle1">{randomTime}</Typography>
            </Box>
            
          </Box>
          
        ))}
        <hr />
      </Box>

      <hr />
      <Box style={{ margin: "auto", width: "100%" }}>
        <Box
          style={{
            marginLeft: "10%",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Button variant="outlined">LOAD MORE</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ComicBook;
