import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header';
import { FetchBooks, StoreBooks, SaveBook } from '../../Redux/actions';
import store from '../../Redux/store';
import DisplayBooks from '../DisplayBooks';
import './App.css';


class App extends Component {
  componentDidMount() {
    fetch('/booksFromDatabase').then(response => response.json(response)).then((jsonResponse) => {
      Object.keys(jsonResponse).forEach((key) => {
        jsonResponse[key].forEach((y) => {
          let like;
          if ((y.like === null) || (y.like === false)) { like = 'dislike'; } else {
            like = 'like';
          }
          store.dispatch(SaveBook(y.author, y.bookid, y.name, y.rating, like));
        });
      });
    });
    if (this.props.books.length === 0) {
      console.log(this.props.books.length);
      store.dispatch(this.props.store());
    }
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
        <div className="App-Nav-Bar">
          <div className="App-Bs">Bs</div>
          <div className="App-Refresh"><i className="material-icons">refresh</i></div>
          <i className="material-icons">settings</i>
        </div>
        <div className="App-div">
          <Header value="The Book Shelf" />
          <button
            className="App-reload"
            onClick={() => store.dispatch({
            type: 'change',
            payload: 0,
          })}
          >Oops! No Books Found!<br />
import them now ?
          </button>

        </div>
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
function mapDispatchToProps(dispatch) {
  return ({
    store: () => dispatch(StoreBooks()),
    get: () => FetchBooks(),
  });
}
App.propTypes = {
  books: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  store: PropTypes.func.isRequired,
  get: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
