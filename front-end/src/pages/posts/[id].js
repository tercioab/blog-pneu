import { useRouter } from "next/router"
import postsJson from '../../utils/posts.json'

export async function getStaticPaths() {
    const paths = postsJson.map((product) => ({
      params: { id: product.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
}
  

export async function getStaticProps({ params }) {
    console.log('Debugging getStaticProps');
    const post = postsJson.find((p) => p.id === Number(params.id));
    return {
      props: {
        post,
      },
    };
  }
  


export default function PostById({ post }) {




 

    // const postId = postsJson.find(item => item.id === id)
    return (
        <>
         {post.content}
        </>
    ) 
}