import Carousel from 'react-material-ui-carousel';
import styles from '../styles/Carousel.module.css'


export default function CarouselComponent() {
     
    return (
        <Carousel autoPlay={5000}>
        
            <img className={styles.imagem }src="https://arquivo.devmedia.com.br/marketing/img/guia-css-38149.png" alt="Image 1" />
            <img className={styles.imagem }src="https://arquivo.devmedia.com.br/marketing/img/guia-css-38149.png" alt="Image 1" />
            <img className={styles.imagem }src="https://arquivo.devmedia.com.br/marketing/img/guia-css-38149.png" alt="Image 1" />
        </Carousel>
    )
}

