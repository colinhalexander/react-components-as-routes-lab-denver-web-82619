import React from 'react';
import { actors } from '../data';
import Person from './Person'

const Actors = () => {

  const actorsList = () => {
    return actors.map(actor => <Person key={actor.name} type="actor" name={actor.name} movies={actor.movies} />)
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList()}
    </div>
  );
};

export default Actors;
