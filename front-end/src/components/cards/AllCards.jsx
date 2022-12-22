import Box from '@mui/material/Box';
import AllMainCards from './AllMainCards'
import DestacCards from './DestacCards';

export default function AllCards() {
    
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
            <DestacCards />
            <AllMainCards />
        
        </Box>
    )
}