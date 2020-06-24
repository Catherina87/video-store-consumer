import React, { useContext } from 'react';
import {SessionContext} from "../App"

const Movie = (props) => {

  const sessionContext = useContext(SessionContext);

  const onMovieClick = (e) => {
    e.preventDefault();
    console.log(e);
    // define movie from event somehow?
    // call the onMovieCallback with the id of the movie clicked, or pass back up the entire movie object?
    // props.onMovieCallback(movie)
    // something like: ??
    // const user = e.target.elements.username.value
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.overview}</p>
      <p>{props.release_date}</p>
      {/* <button onClick={()=> sessionContext.setSelectedMovie(movie)}>Select</button> */}
      <button onClick={onMovieClick}>Select this movie</button>
    </div>
  );
}

export default Movie;
