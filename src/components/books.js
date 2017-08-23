import React, { Component } from 'react';

let books = [
  {
    id: 1,
    title: 'Harry Potter',
    author: 'JK Rowland',
  },
  {
    id: 2 ,
    title: 'The Alchemist',
    author: 'Paul Coelho',

  }
]

export default class Books extends Component {
  render() {
    let myBooks = books.map((book) => {
      return(
        <ul key={book.id}>
        <li>{book.title + ", by " + book.author} </li>
        </ul>
      )
    })
    return(
<div>
<h2>Books</h2>
{myBooks}
</div>
    );
  }
}
