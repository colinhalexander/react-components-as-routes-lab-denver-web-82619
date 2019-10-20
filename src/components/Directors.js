import React from 'react';
import Person from './Person'
import { directors } from '../data';

const Directors = () => {
  
  const directorsList = () => {
    return directors.map(director => <Person key={director.name} type="director" name={director.name} movies={director.movies} />)
  }
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList()}
    </div>
  );
}

export default Directors
