import MediaCard from "./unit/MediaCard.unit"
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import postsJson from '../../utils/posts.json'

export default function MediaCardGroup() {



    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(postsJson);
    }, []);

    return (
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
         
        {posts.map(({ title, image, preview, id }, i) => <MediaCard id={id} key={i} imageSrc={image} title={title} preview={preview} />)}
        
        </Box>
         
       
            
          
    )
}