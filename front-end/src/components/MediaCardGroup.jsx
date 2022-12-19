import MediaCard from "../components/MediaCard"
import Box from '@mui/material/Box';

export default function MediaCardGroup() {
    return (
        <Box sx={{
            mt: 2,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            mt: 2
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