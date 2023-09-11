import React from 'react'
import {Box} from '@mui/material'
import CardMenuBar from '../atoms/CardMenubar'
import CardImages from '../atoms/CardImages'
import CardHeadings from '../atoms/CardHeadings'
const tempHeadings=['Comic1','Comic11','Comic13',]
 const DisplayCards = () => {
  return (
    <>
    <Box width='100%'>
        <CardMenuBar headings={tempHeadings}></CardMenuBar>
        <CardHeadings headingText='Comics'/>
        <CardImages/>
    </Box>
    </>
  )
}
export default DisplayCards;
