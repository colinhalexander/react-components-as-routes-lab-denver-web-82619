import React from 'react';

const Movie = (props) => {

  const genreList = () => {
    return props.genres.map(genre => <li key={genre}>{genre}</li>)
  }

  return (
    <div className="movie">
      <h4>{props.title}</h4>
      <p>{props.time} minutes</p>
      <p>Genres: </p>
      <ul>
        {genreList()}
      </ul>
    </div>
  )
}

export default Movie