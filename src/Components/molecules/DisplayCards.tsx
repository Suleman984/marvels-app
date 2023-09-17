import React from 'react'
import {Box} from '@mui/material'
import CardMenuBar from '../atoms/CardMenubar'
import CardImages from '../atoms/CardImages'
import CardHeadings from '../atoms/CardHeadings'

const DisplayCards: React.FC<{ data: any[],headings:string[],HeadingText:string,Images:string[] }> = ({ data,headings,HeadingText,Images }) => {
  return (
    <>
    <Box width='100%'>
        <CardMenuBar headings={headings}></CardMenuBar>
        <CardHeadings headingText={HeadingText}/>
        
        <CardImages apidata={data} images={Images}/>
        
    </Box>
    </>
  )
}
export default DisplayCards;
