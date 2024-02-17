import React from 'react';
import './App.css';

function MovieList({ movies }) {
  return (
      <ul className='movie-list'>
        {movies.map(movie => (
          <li key={movie.id} className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className='movie-details'>
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <p className="description">{movie.overview}</p>
            </div>
          </li>
        ))}
      </ul>
  );
}

export default MovieList;
