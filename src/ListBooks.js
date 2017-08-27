import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
            <span>List Books!</span>
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