import MediaCard from "../components/MediaCard"
import Box from '@mui/material/Box';

export default function MediaCardGroup() {
    return (
        <Box sx={{
            mt: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            ml: 20,
            mr: 20,
        }}  >
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
        </Box>
         
       
            
          
    )
}