import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks />
        )}/>
        <Route path='/search' render={() => (
          <SearchBook />
        )}/>
      </div>
    )
  }
}

export default BooksApp
