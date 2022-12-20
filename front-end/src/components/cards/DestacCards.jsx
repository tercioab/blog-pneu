import Box from '@mui/material/Box';
import FeaturedCardUnit from "./unit/FeaturedCard.unit";
import FeaturedCardOfGroup from "./unit/FeaturedCardOfGroup";
import { useEffect, useState } from 'react';
import postsJson from '../../utils/posts.json'

export default function DestacCards() {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
      setPosts(postsJson)
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

          {posts
            .slice(posts.length - 1, posts.length).map(({ title, image, preview }, i) => 
            <FeaturedCardUnit key={i} imageSrc={image} title={title} preview={preview} />)}
                
          {posts
            .slice(posts.length - 8, posts.length - 1)
            .map(({ title, image, preview }, i) => <FeaturedCardOfGroup key={i} imageSrc={image} title={title} preview={preview} />)}
            
           
            </Box>
            
            <hr/>
        
        </>
     )
 }