import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Customers from './components/Customers.js'
import Library from './components/Library.js'
import Search from './components/Search.js'
import axios from 'axios';

// we can consume the context anywhere if we export it like so:
export const SessionContext = React.createContext();

const App = () => {

  const [selectedCustomer, setSelectedCustomer] = useState(undefined);
  const [selectedMovie, setSelectedMovie] = useState(undefined);
  const [library, setLibrary] = useState([]);


  const addMovietoLibraryList = (moviejson, rails_id) => {
    // updates library with new movie object

    const libraryCopy = [...library];
  
    const newMovie = {
      id: rails_id,
      release_date: moviejson.release_date,
      title: moviejson.title,
      overview: moviejson.overview
    }
    
    libraryCopy.push(newMovie);
    setLibrary(libraryCopy);
  }

  const onAddMovie = (moviejson) => {
    // passed down to search component
    // make API call to post movie in Rails DB
    // uses create action in Rails
 
    const endpoint_uri = 'http://localhost:4000/movies'
    
    axios.post(endpoint_uri, moviejson)
        // format the moviejson correctly for our rails api to recognize it
      .then((response) => {
        console.log(response);
        // const id = response.data.movie.id;
        // addMovietoLibraryList(moviejson, id)
      })
      .catch((error) => {
        alert("There was an error adding a movie!")
      });
  }

  return (
    <SessionContext.Provider value={{
      selectedCustomer,
      selectedMovie,
      library,
      setSelectedCustomer,
      setSelectedMovie}}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/library' component={Library} />
            <Route path='/search' component={Search} onAddMovie={onAddMovie} />
            <Route path='/customers' component={Customers} />
          </Switch>
        </div>
      </Router>
    </SessionContext.Provider>
  );
}

export default App;