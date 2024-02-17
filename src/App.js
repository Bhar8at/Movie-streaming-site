// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList.js';
import './App.css';
import Card from './Card.js';

const API_KEY = '6ff0f3dc5208e5952929e413f480d0a5';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        const fetchedMovies = response.data.results;
        setMovies(fetchedMovies);
        // Select a random movie initially
        const randomIndex = Math.floor(Math.random() * fetchedMovies.length);
        setRandomMovie(fetchedMovies[randomIndex]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to handle movie card click
  const handleMovieClick = (clickedMovie) => {
    setRandomMovie(clickedMovie);
  };

  return (
    <div className="App">
      <Card Movie={randomMovie} />
      <div className='movie-list-container'>
        {/* Pass handleMovieClick as a prop to MovieList */}
        <MovieList movies={movies} handleMovieClick={handleMovieClick} />
      </div>
    </div>
  );
}

export default App;
