import React from 'react'
import {Box} from '@mui/material'
import CardMenuBar from '../atoms/CardMenubar'
import CardImages from '../atoms/CardImages'
import CardHeadings from '../atoms/CardHeadings'

const DisplayCards: React.FC<{ data: any[],headings:string[] }> = ({ data,headings }) => {
  return (
    <>
    <Box width='100%'>
        <CardMenuBar headings={headings}></CardMenuBar>
        <CardHeadings headingText='Comics'/>
        
        <CardImages comics={data}/>
        
    </Box>
    </>
  )
}
export default DisplayCards;
