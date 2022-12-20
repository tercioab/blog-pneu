import Header from "../components/Header"
import * as React from 'react';
import MediaCardGroup from "../components/cards/AllMainCards";
import Carousel from '../components/Carousel'
import { useRouter } from 'next/router';
import DestacCards from "../components/cards/DestacCards";





export default function Home() {

  const router = useRouter();
  const { id } = router.query;

  console.log(id)

  
  return (
    <>
      <Header />
      <Carousel />
       <DestacCards />
        <MediaCardGroup />
   
    
     
      </>
  )
}
