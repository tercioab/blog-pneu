import Carousel from 'react-material-ui-carousel';
import styles from '../styles/Carousel.module.css'
import { useEffect, useState } from 'react';

export default function CarouselComponent() {





    const [data, setData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:3000/post');
          const data = await response.json();
          const dataLength = await data.length
        setData(data.slice(dataLength - 5, dataLength));
      }
      fetchData();
    }, []);

     
    return (
        <Carousel className={styles.carousel} autoPlay={5000}>

           
       
                {data.map(({ title, image }) => 
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

