import React from 'react'
import ComicBook from '../atoms/ComicBook'
import { Box } from '@mui/material'
// import Mycomics from '../atoms/Mycomics'

 const ComicSection:React.FC<{comics:any}> = ({comics}) => {
  return (
    <Box style={{ position: "relative", zIndex: 2 ,width:'100%'}}>
    <ComicBook comics={comics}/>
    
    </Box>
  )
}
export default ComicSection
