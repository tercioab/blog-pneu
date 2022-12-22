import MediaCard from "./unit/MediaCard.unit"
import { useEffect, useState } from 'react';
import postsJson from '../../utils/posts.json'
import  myContext from '../../context/context'
import { useContext } from 'react'



export default function MediaCardGroup() {

  const { results }  = useContext(myContext);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(postsJson);
    }, []);
  
  const postsResult = (postsReturn) => {
  return  postsReturn.map(({ title, image, preview, id }, i) => <MediaCard id={id} key={i} imageSrc={image} title={title} preview={preview} />)
  }

    return (
      
         <>
        {(results.length && postsResult(results)) || (postsResult(posts))}
        </>
    
         
       
            
          
    )
}