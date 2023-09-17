import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ComicAddresses } from '../ImageAddresses';
import './styling/ComicBook.css'; // Import the CSS file

const getRandomTime = () => {
  // Generate a random number between 1 and 7 for days
  const randomDays = Math.floor(Math.random() * 7) + 1;

  // Generate a random number between 1 and 23 for hours
  const randomHours = Math.floor(Math.random() * 23) + 1;

  return `${randomDays} days, ${randomHours} hours ago`;
};

const ComicBook: React.FC<{ comics: any }> = ({ comics }) => {
  const randomTime = getRandomTime();
  const [totalComics, setTotalComics] = useState<string[]>(comics.slice(0, 7));
  const [showAllComics, setShowAllComics] = useState(false);

  const toggleShowAllComics = () => {
    setShowAllComics(!showAllComics);
  };

  useEffect(() => {
    if (showAllComics) {
      setTotalComics(comics);
    } else {
      setTotalComics(comics.slice(0, 7));
    }
  }, [showAllComics, comics]);

  return (
    <Box className="ComicBook-container" width="100%">
      <Typography variant="h5" className="ComicBook-title">
        THE LATEST
      </Typography>
      {totalComics.map((comic: any, index: number) => (
        <Box
          key={index}
          className="ComicBook-comicContainer"
        >
          <Box
            className="ComicBook-comicBox"
          >
            <Box className="ComicBook-comicImage">
              <img
                src={ComicAddresses[index]}
                alt={comic.name}
              />
            </Box>
            <Box className="ComicBook-comicInfo">
              <Typography className="ComicBook-comicName">
                {comic.name}
              </Typography>
              <Typography variant="h5" className="ComicBook-link">
                <a href="www.marvel.com" className="ComicBook-link">
                  Hello Comic World
                </a>
              </Typography>
              <Typography variant="subtitle1">{randomTime}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
      <hr />
      <Box className="ComicBook-loadMoreButton" >
        <Button
          variant="outlined"
          onClick={toggleShowAllComics}
        >
          {showAllComics ? 'HIDE' : 'LOAD MORE'}
        </Button>
      </Box>
    </Box>
  );
};

export default ComicBook;
