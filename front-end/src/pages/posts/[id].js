import postsJson from '../../utils/posts.json';
import Box from '@mui/material/Box';
import Header from '../../components/Header';
import CardMedia from '@mui/material/CardMedia';

export async function getStaticPaths() {
    const paths = postsJson.map((product) => ({
      params: { id: product.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
};
  
export async function getStaticProps({ params }) {
    console.log('Debugging getStaticProps');
    const post = postsJson.find((p) => p.id === Number(params.id));
    return {
      props: {
        post,
      },
    };
};
  
export default function PostById({ post }) {
    return (
        <>
          <Header/>

            <Box sx={{
              mt: 10,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'left',
              ml: 30,
              mr: 30,
              mb: 6,
              maxWidth: 800 
             }}>

              <CardMedia sx={{ mb:3 }} component="img" height="300" image={post.image}  alt={post.title} />
              <h1>{post.title}</h1>
              <br />
              <br /> 
              <p>{post.content}</p>     
          
            </Box>
        </>
    ) 
}