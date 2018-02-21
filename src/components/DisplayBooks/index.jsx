import React from 'react';
import PropTypes from 'prop-types';
import BookDetails from '../BookDetails';
import './DisplayBooks.css';

class DisplayBooks extends React.Component {
  displayAllBooks() {
    const array = this.props.books;
    const details = [];
    array.forEach((x) => {
      details
        .push(<BookDetails
          name={x.Name}
          author={x.Author}
          id={x.id}
          key={x.id}
          rating={x.rating}
          status={x.status}
        />);
    });
    return details;
  }
  render() {
    return (
      <div className="DisplayBooks-div">
        {this.displayAllBooks()}
      </div>
    );
  }
}
DisplayBooks.propTypes = {
  books: PropTypes.array.isRequired,
};
export default DisplayBooks;
