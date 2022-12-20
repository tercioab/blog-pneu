import Carousel from 'react-material-ui-carousel';
import styles from '../styles/Carousel.module.css'
import { useEffect, useState } from 'react';
import postsJson from '../utils/posts.json'

export default function CarouselComponent() {





    const [posts, setPosts] = useState([]);
    useEffect(() => {
          const postsLength = postsJson.length
        setPosts(postsJson.slice(postsLength - 5, postsLength));
    }, []);

     
    return (
        <Carousel className={styles.carousel} autoPlay={5000}>

           
       
                {posts.map(({ title, image }) => 
                    <>    
                   <h2 style={{
                    position: 'absolute',
                    color: 'white',
                    position: 'absolute',
                    top: '50%',
                    left: '20%',
                    zIndex: 1
                }}>{title}</h2>
                        <img src={image} alt="Image 1" />
                        </>
 )}

              
                
               
       
        
            
        
        </Carousel>
    )
}

