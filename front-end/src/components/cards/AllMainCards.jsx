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
            mt: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            ml: 20,
            mr: 20,
      }}  >
         
        {posts.map(({ title, image, preview }, i) => <MediaCard key={i} imageSrc={image} title={title} preview={preview} />)}
        
        </Box>
         
       
            
          
    )
}