import Header from "../components/Header"
import MediaCard from "../components/MediaCard"
import * as React from 'react';
import Box from '@mui/material/Box';



export default function Home() {
  return (
    <>
      <Header />
    
        <Box display="flex"  flexWrap="wrap" mt="12" justifyContent="center" >
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        </Box>
    </>
  )
}
