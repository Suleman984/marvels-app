import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { movieImages,movieNames,movieDescriptions } from '../News';
const MoviesPerPage = 4; 
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
      <Box style={{ display: 'flex', flexWrap: 'wrap',marginTop:'20px' }}>
        {displayedMovies.map((imageSrc: string, index: number) => (
          <Box
            key={index}
            width="20%"
            style={{
              height: '80vh',
              margin: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
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
      <Box style={{textAlign:'center',display:'flex',justifyContent:'center',width:'100%',marginTop:'50px'}}>
      <Pagination
        count={Math.ceil(movieImages.length / MoviesPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
      </Box>
    </Box>
  );
};

export default MovieDisplay;
