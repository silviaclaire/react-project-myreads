import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShowBooks from './ShowBooks'
import sortBy from 'sort-by'

class SearchBook extends React.Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired,
  }

  state = {
    query: '',
    showingBooks: []
  }

  searchBook = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(query, 20).then((books) => {
      if (books) {
        books.sort(sortBy('title'))
        this.setState({ showingBooks: books })
      }
    })
  }

  render() {
    const { onUpdateShelf } = this.props
    const { query, showingBooks } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.searchBook(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ShowBooks
            books={showingBooks}
            onUpdateShelf={onUpdateShelf}
          />
        </div>
      </div>
    )
  }
}

export default SearchBook