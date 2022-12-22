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
          {posts
            .slice(posts.length - 1, posts.length).map(({ title, image, preview, id }, i) => 
            <FeaturedCardUnit key={i}  id={id} imageSrc={image} title={title} preview={preview} />)}
                
          {posts
            .slice(posts.length - 7, posts.length - 1)
            .map(({ title, image, preview, id }, i) => <FeaturedCardOfGroup key={i} id={id} imageSrc={image} title={title} preview={preview} />)}
            <hr/>
        
        </>
     )
 }