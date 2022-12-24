
import AllMainCards from './AllMainCards'
import DestacCards from './DestacCards';
import MediaCardRelatives from "./unit/mediaCardRelatives"
import myContext from '../../context/context';
import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AllCards() {

  const { results } = useContext(myContext)
  
    
  const searchResult = () => {
    return  results.map(({ title, image, preview, id }, i) => <MediaCardRelatives id={id} key={i} imageSrc={image} title={title} preview={preview} />)
  }
  

  return (
    <>
      {((results.length &&
      
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
        
     {searchResult()}
      
      
      
        </Box>
      
      ) ||
        
        <>
        <br />
        <br />
        <hr />
         <Typography
            variant="h4"
            noWrap
            href="/"
            sx={{
              ml: 6,
              mt: 6,
              justifyContent: 'center',
              display: { xs: 'none', md: 'flex' },
           
            }}
          >
           Ultimas postagens
        </Typography>
        <DestacCards />
        <hr />
        
        <Typography
            variant="h4"
            noWrap
            href="/"
            sx={{
              ml: 6,
              mt: 6,
              justifyContent: 'center',
              display: { xs: 'none', md: 'flex' },
           
            }}
          >
           Todos os posts
        </Typography>
        

          <AllMainCards />
        </>
      
      )}
      

        </>
  )
  
}