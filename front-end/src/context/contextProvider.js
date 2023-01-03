import myContext from './context';
import React, { useState } from 'react';
import PropTypes from 'prop-types';



function  MyContextProvider({children}) {
  const [results, setResults] = useState([]);
  const [resultkm, setResultkm] = useState([]);

  const searchValues = {
    results,
    setResults,
    resultkm,
    setResultkm,

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