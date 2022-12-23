import postsJson from '../../utils/posts.json';
import Box from '@mui/material/Box';
import Header from '../../components/Header';
import CardMedia from '@mui/material/CardMedia';
import ParseHtml from 'html-react-parser';
import MediaCard from "../../components/cards/unit/MediaCard.unit"


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



  const searchCategories = () => {
    const searchPostCategory = post.categories
      .map(({ id }) => id);
    
    const returnPosts = postsJson
      .filter(item => item.categories
        .some(category => searchPostCategory
          .includes(category.id)));
    
    const posts = returnPosts
      .filter(({ id }) => id !== post.id);
    
    return posts
      .map(({ title, image, preview, id }, i) => <MediaCard id={id} key={i} imageSrc={image} title={title} preview={preview} />);
};


searchCategories()

    return (
        <>
          <Header/>

            <Box sx={{
              mt: 10,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'left',
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
            marginLeft: 35,
            marginRight: 35,
          },
          

       
       
         
             }}>

              <CardMedia sx={{ mb:3, maxHeight: 300, minHeight: 199 }} component="img" image={post.image}  alt={post.title} />
              <h1>{post.title}</h1>
              <br />
              <br /> 
              <br /> 
              {ParseHtml(post.content)}
        </Box>
        
        

        

        <hr/>


          <Box sx={{
              mt: 6,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
          mb: 1,

          [`@media (max-width: 599px)`]: {
            marginLeft: 0,
            marginRight: 0,
          },


          [`@media (min-width: 600px)`]: {
            marginLeft: 8,
            marginRight: 8,
          },
          
         
       

          [`@media (min-width: 960px)`]: {
            marginLeft: 35,
            marginRight: 35,
          },
          

       
       
         
             }}>

<h3>Posts Relacionados</h3>
        
    
        </Box>


   




        <Box sx={{
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
            marginLeft: 35,
            marginRight: 35,
          },
          

       
       
         
             }}>

{searchCategories()}
        
    
        </Box>

        </>
    ) 
}