import myContext from './context';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MediaCardRelatives from "../components/cards/unit/mediaCardRelatives"



function  MyContextProvider({children}) {
  const [results, setResults] = useState([]);
  const [resultkm, setResultkm] = useState([]);


  const searchResult = () => {
    return  results.map(({ title, image, preview, id }, i) => <MediaCardRelatives id={id} key={i} imageSrc={image} title={title} preview={preview} />)
  }


  const searchValues = {
    results,
    setResults,
    resultkm,
    setResultkm,
    searchResult,
  }


  return (
    <myContext.Provider value={searchValues}>
     {children}
    </myContext.Provider>
  );
}


MyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default  MyContextProvider