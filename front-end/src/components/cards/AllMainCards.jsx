import MediaCard from "./unit/MediaCard.unit"
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

export default function MediaCardGroup() {



    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:3000/post');
        const data = await response.json();
        setData(data);
      }
      fetchData();
    }, []);



    return (
        <Box sx={{
            mt: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            ml: 20,
            mr: 20,
      }}  >
         
        {data.map(({ title, image, preview }, i) => <MediaCard key={i} imageSrc={image} title={title} preview={preview} />)}
        
        </Box>
         
       
            
          
    )
}