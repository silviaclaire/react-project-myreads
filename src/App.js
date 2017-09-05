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

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, selectedShelf) => {
    BooksAPI.update(book, selectedShelf)
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  getShelf = (bookId) => {
    let myBooks = this.state.books
    let book = myBooks.find((aBook) => {
      return aBook.id === bookId
    })
    return book ? book.shelf : 'none'
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateShelf={this.updateShelf}
            getShelf={this.getShelf}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBook
            onUpdateShelf={this.updateShelf}
            getShelf={this.getShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
