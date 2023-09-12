import React from 'react'
import ComicBook from '../atoms/ComicBook'
import { Box } from '@mui/material'

 const ComicSection = () => {
  return (
    <Box style={{ position: "relative", zIndex: 2 }}>
    <ComicBook/>
    </Box>
  )
}
export default ComicSection
