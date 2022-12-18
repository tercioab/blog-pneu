import { useState, useEffect } from 'react';
import parse from 'html-react-parser';

function AllClass() {
 const [data, setData] = useState()

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('http://localhost:3000/post');
            const json = await response.json();
            console.log(json)
          setData(json);
        }
        fetchData();
      }, []);
    

    return (
        <>
            {data?.map(({ content }) => parse(content) )}
        </>
    )
}

export default AllClass;