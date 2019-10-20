import React from 'react';
import Movie from './Movie'
import { movies } from '../data';

const Movies = () => {
  
  const makeMovies = () => {
    return movies.map(movie => <Movie key={movie.title} title={movie.title} time={movie.time} genres={movie.genres} />)
  }
  
  return (
    <div>
      <h1>Movies Page</h1>
      {makeMovies()}
    </div>
  );
};

export default Movies;
