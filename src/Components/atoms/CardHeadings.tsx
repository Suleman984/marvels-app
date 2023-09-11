import React from 'react';
import Typography from '@mui/material/Typography';

interface CenteredHeadingProps {
  headingText: string;
}

const CardHeadings: React.FC<CenteredHeadingProps> = ({ headingText }) => {
  return (
    <div style={{ textAlign: 'center',marginTop:'40px' }}>
      <Typography variant="h3">{headingText}</Typography>
    </div>
  );
};

export default CardHeadings;
