import React from 'react';
import PropTypes from 'prop-types';
import BookDetails from '../BookDetails';
import './EditBooks.css';

class EditBooks extends React.Component {
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
EditBooks.propTypes = {
  books: PropTypes.array.isRequired,
};
export default EditBooks;
