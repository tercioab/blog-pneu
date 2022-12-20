import Box from '@mui/material/Box';
import FeaturedCard from "./unit/FeaturedCard.unit";
import FeaturedCards2 from "./unit/FeaturedCardOfGroup";
import { useEffect, useState } from 'react';

export default function DestacCards() {


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

{data.slice(data.length - 1, data.length).map(({ title, image, preview }, i) => 
<FeaturedCard key={i} imageSrc={image} title={title} preview={preview} />)}

{ data.slice(data.length - 4, data.length - 1).map(({ title, image, preview }, i) => <FeaturedCards2 key={i} imageSrc={image} title={title} preview={preview} />) }


        </Box>
         
     )
 }