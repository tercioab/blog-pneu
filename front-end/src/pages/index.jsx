import Header from "../components/Header"
import * as React from 'react';
import Carousel from '../components/Carousel'
import SearchBar from "../components/SearchBar";
import MyContextProvider from "../context/contextProvider";
import AllCards from "../components/cards/AllCards";







export default function Home() {





  return (
    <>
        <MyContextProvider>
        <Header />
        <Carousel />
        <SearchBar />
        <AllCards />
        </MyContextProvider>
      </>
  )
}
