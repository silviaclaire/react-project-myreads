import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const bookshelves = [
  { 'name': 'currentlyReading',
    'title': 'Currently Reading'
  },
  { 'name': 'wantToRead',
    'title': 'Want to Read'
  },
  { 'name': 'read',
    'title': 'Read'
  }
]

class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {bookshelves.map((bookshelf) => (
              <div key={bookshelf.name}>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{bookshelf.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books
                        .filter(book => book.shelf === bookshelf.name)
                        .map(book =>
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{
                                  width: 128, height: 193,
                                  backgroundImage: `url(${book.imageLinks.thumbnail})`
                                }}/>
                                <div className="book-shelf-changer">
                                  <select defaultValue={book.shelf}>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.authors}</div>
                            </div>
                          </li>
                        )
                      }
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks