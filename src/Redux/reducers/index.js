import { saveBook, storeBooks, changeStatus, fetchBook } from '../actions';

const defaultState = {
  books: [],
  page: 0,
};
const redux = (state = defaultState, action) => {
  switch (action.type) {
    case saveBook:
      return { ...state, books: state.books.concat(action.payload) };
    case storeBooks: return { ...state, page: 1 };
    case 'change':
      fetch('/saveBooks', {
        method: 'POST',
      });
      return { ...state, page: 0 };
    case changeStatus:
      let string;
      const temp = [].concat(state.books);
      for (let i = 0; i < temp.length; i += 1) {
        if (temp[i].id === action.id) {
          temp[i].status = ((temp[i].status === 'dislike') || (temp[i].status === null)) ? 'like' : 'dislike';
          string = `/book/${temp[i].status}/${temp[i].id}`;
        }
      }
      console.log(string);
      fetch(string);
      return { ...state, books: temp };
    default: return state;
  }
};

export default redux;
