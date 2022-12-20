import Box from '@mui/material/Box';
import FeaturedCardUnit from "./unit/FeaturedCard.unit";
import FeaturedCardOfGroup from "./unit/FeaturedCardOfGroup";
import { useEffect, useState } from 'react';
import posts from '../../utils/posts.json'

export default function DestacCards() {


    const [data, setData] = useState([]);

    useEffect(() => {
      setData(posts)
    }, []);



    return (
        <>
              <Box sx={{
            mt: 6,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            ml: 20,
                mr: 20,
                mb: 6
        }}  >

{data.slice(data.length - 1, data.length).map(({ title, image, preview }, i) => 
    <FeaturedCardUnit key={i} imageSrc={image} title={title} preview={preview} />)}
                
                
            
            {data.slice(data.length - 8, data.length - 1).map(({ title, image, preview }, i) => <FeaturedCardOfGroup key={i} imageSrc={image} title={title} preview={preview} />)}
            
           
            </Box>
            
            <hr/>
        
        </>
     )
 }