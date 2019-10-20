import React from 'react'

const Person = (props) => {
  
  const movieList = () => {
    return props.movies.map(movie => <li>{movie}</li>)
  }

  return (
    <div className={props.type}>
      <h4>{props.name}</h4>
      <p>Movies:</p>
      <ul>
        {movieList()}
      </ul>
    </div>
  )
}

export default Person