import Carousel from 'react-material-ui-carousel';
import styles from '../styles/Carousel.module.css'


export default function CarouselComponent() {
     
    return (
        <Carousel className={styles.carousel} autoPlay={5000}>

            <div  >
                <h2 style={{
                    position: 'absolute',
                    color: 'white',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 1
                }}>Titulo da Materia Aqui </h2>
                <img src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Image 1" />
                
               
            </div>
        
        
            
        
        </Carousel>
    )
}
