import React, { useState, useEffect, useContext }  from 'react';
import axios from 'axios';
import { SessionContext } from "../App";
import Movie from './Movie.js'

const Library = (props) => {

  // const [library, setLibrary] = useState([]);
  const sessionContext = useContext(SessionContext);

  // useEffect(() => {
  //   axios.get('http://localhost:4000/movies')
  //     .then((response) => {
  //       setLibrary(response.data);
  //     })
  //     .catch(()=> {
  //       alert("Failed to fetch movies")
  //     })
  // },[])

  const libraryList = sessionContext.library.map((movie) => {
    return (
      <Movie
        title={movie.title} 
        overview={movie.overview}
        release_date={movie.release_date}
        external_id={movie.external_id}
        onMovieCallback={props.onAddMovie}
      />
    )
  })  

  return (
    <div>
      {libraryList}
    </div>
  )
}

export default Library;
