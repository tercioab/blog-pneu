import Carousel from 'react-material-ui-carousel';
import styles from '../styles/Carousel.module.css'
import { useEffect, useState } from 'react';
import postsJson from '../utils/posts.json';
import Button from '@mui/material/Button';

export default function CarouselComponent() {





    const [posts, setPosts] = useState([]);
    useEffect(() => {
          const postsLength = postsJson.length
        setPosts(postsJson.slice(postsLength - 5, postsLength));
    }, []);

     
    return (
        <Carousel className={styles.carousel} autoPlay={5000}>

           
       
                {posts.map(({ title, preview , image, id  }) => 
                    <>    
                        <Button
                            variant="text"
                          
                            style={{
                                position: 'absolute',
                                color: 'white',
                                position: 'absolute',
                                top: '30%',
                                left: '20%',
                                zIndex: 1,
                           
                                
                                
                            }}
                            size="big" href={`posts/${id}`} ><h1>{title}</h1></Button>
                        <img src={image} alt="Image 1" />

                        <p
                            style={{
                                position: 'absolute',
                                top: '40%',
                                left: '20.4%',
                                marginRight: '5%',
                                marginTop: '0.5rem', 
                                zIndex: 1,
                                color: 'white'
                            }}
                        >{preview}</p>
                        </>
 )}

              
                
               
       
        
            
        
        </Carousel>
    )
}

