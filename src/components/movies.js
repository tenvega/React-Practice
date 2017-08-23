import React, { Component } from 'react';

let movies = [
  {
    id: 1,
    title: 'The Goonies',
    producer: 'Steven Speilberg',
  },
  {
    id: 2 ,
    title: 'Star Wars',
    producer: 'George Lucas',

  }
]

export default class Movies extends Component {
  render() {
    let myMovies = movies.map((movies) => {
      return(
        <ul key={movies.id}>
        <li>{movies.title + ", by " + movies.producer} </li>
        </ul>
)
    })
    return (
<div>
<h1>Movies</h1>
{myMovies}
</div>
    );
  }
}
