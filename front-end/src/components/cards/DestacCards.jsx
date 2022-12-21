import Box from '@mui/material/Box';
import FeaturedCardUnit from "./unit/FeaturedCard.unit";
import FeaturedCardOfGroup from "./unit/FeaturedCardOfGroup";
import { useEffect, useState } from 'react';
import postsJson from '../../utils/posts.json';


export default function DestacCards() {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
      setPosts(postsJson)
    }, []);



    return ( 
        <>
              <Box sx={{
            mt: 10,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            mb: 6,

        [`@media (max-width: 599px)`]: {
          marginLeft: 0,
          marginRight: 0,
        },
        
        [`@media (min-width: 600px)`]: {
          marginLeft: 8,
          marginRight: 8,
        },
      
        [`@media (min-width: 960px)`]: {
          marginLeft: 30,
          marginRight: 30,
        },
        
        }}  >

          {posts
            .slice(posts.length - 1, posts.length).map(({ title, image, preview, id }, i) => 
            <FeaturedCardUnit key={i}  id={id} imageSrc={image} title={title} preview={preview} />)}
                
          {posts
            .slice(posts.length - 8, posts.length - 1)
            .map(({ title, image, preview, id }, i) => <FeaturedCardOfGroup key={i} id={id} imageSrc={image} title={title} preview={preview} />)}
            
           
            </Box>
            
            <hr/>
        
        </>
     )
 }