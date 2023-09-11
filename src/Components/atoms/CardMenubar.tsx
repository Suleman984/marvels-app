import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface NavbarProps {
  headings: string[];
}

const CardMenuBar: React.FC<NavbarProps> = ({ headings }) => {
  return (
    <AppBar position="static" style={{backgroundColor:'white',color:'black',boxShadow:'none'}}>
      <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {headings.map((heading, index) => (
          <Typography key={index} variant="h6" style={{ margin: '0 20px' }}>
            {heading}
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default CardMenuBar;
