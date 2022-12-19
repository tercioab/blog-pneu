import Header from "../components/Header"
import MediaCard from "../components/MediaCard"
import Box from '@material-ui/core';






export default function Home() {
  return (
    <>
        <Header />
        <Box display="flex" flexDirection="row">
  <MediaCard />
  <MediaCard />
  <MediaCard />
  <MediaCard />
  <MediaCard />
  <MediaCard />
  <MediaCard />
</Box>
    </>
  )
}
