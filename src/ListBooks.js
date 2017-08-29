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
    console.log('Props', this.props)
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
                      <p>Books!</p>
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