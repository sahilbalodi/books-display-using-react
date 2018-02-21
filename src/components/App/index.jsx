import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import { SaveBook } from '../../Redux/actions';
import store from '../../Redux/store';
import DisplayBooks from '../DisplayBooks';
import EditBooks from '../EditBooks';
import './App.css';


class App extends Component {
  componentDidMount() {
    fetch('/booksFromDatabase').then(response => response.json(response)).then((jsonResponse) => {
      Object.keys(jsonResponse).forEach((key) => {
        jsonResponse[key].forEach((y) => {
          let like;
          if (y.like === null) { like = 'dislike'; } else {
            like = 'like';
          }
          store.dispatch(SaveBook(y.author, y.bookid, y.name, y.rating, like));
        });
      });
    });
  }
  render() {
    if (this.props.page === 0) {
      return (
        <div className="App-Nav">
          <div className="App-Nav-Bar">
            <div className="App-Bs">Bs</div>
            <div className="App-Refresh"><i className="material-icons">refresh</i></div>
            <i className="material-icons">settings</i>
          </div>
          <div className="App-div">
            <Header value="The Book Shelf" />
            <DisplayBooks books={this.props.books} />
          </div>
        </div>
      );
    }
    return (
      <div className="App-div">
        <Header value="stored into Database" />
        <div>
          <EditBooks books={this.props.books} />
        </div>
        <Footer value="go back" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return ({
    books: state.books,
    page: state.page,
  });
}
App.propTypes = {
  books: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
};
export default connect(mapStateToProps, null)(App);
