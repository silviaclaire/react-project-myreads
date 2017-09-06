import React from 'react'
import PropTypes from 'prop-types'

class ShowBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
    getShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, onUpdateShelf, getShelf } = this.props
    return (
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{
                  backgroundImage: `url(${book.imageLinks.thumbnail})`
                }}/>
                <div className="book-shelf-changer">
                  <select
                    onChange={(e) => onUpdateShelf(book, e.target.value)}
                    defaultValue={getShelf(book.id)}>
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
        ))}
      </ol>
    )
  }
}

export default ShowBooks