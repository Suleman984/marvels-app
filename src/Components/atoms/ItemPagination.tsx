import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Assuming you have the following arrays of movie data
import { movieImages,movieNames,movieDescriptions } from '../News';

const MoviesPerPage = 4; // Number of movies to display per page

const MovieDisplay: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const startIndex: number = (currentPage - 1) * MoviesPerPage;
  const endIndex: number = startIndex + MoviesPerPage;
  const displayedMovies: string[] = movieImages.slice(startIndex, endIndex);

  return (
    <Box>
      <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
        {displayedMovies.map((imageSrc: string, index: number) => (
          <Box
            key={index}
            width="20%"
            style={{
              height: '80vh',
              margin: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
            <img
              src={imageSrc}
              alt={movieNames[startIndex + index]}
              style={{ width: '100%', height: '80%' }}
            />
            <Typography variant="h6" gutterBottom>
              {movieNames[startIndex + index]}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {movieDescriptions[startIndex + index]}
            </Typography>
          </Box>
        ))}
      </Box>
      <Pagination
        count={Math.ceil(movieImages.length / MoviesPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </Box>
  );
};

export default MovieDisplay;
