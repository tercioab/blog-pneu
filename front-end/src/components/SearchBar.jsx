import React, { useState, useContext } from 'react';
import myContext from '../context/context';
import postsJson from '../utils/posts.json'

export default function SearchBar() {
    const { setResults }  = useContext(myContext);
    const [query, setQuery] = useState('');
  

   


  function handleSubmit(event) {
      event.preventDefault();
      const postResults = postsJson.filter(({ title }) => title.toUpperCase().includes(query.toUpperCase()));
      setResults(postResults);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}


