import React, { Component } from 'react';
import './App.css';

import Header from './components/header.js';
import Movie from './components/movies.js';
import Books from './components/books.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Movie />
        <Books />
        <Footer />
      </div>
    );
  }
}

export default App;
