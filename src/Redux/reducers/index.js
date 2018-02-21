import { saveBook, storeBooks, changeStatus } from '../actions';

const defaultState = {
  books: [],
  page: 0,
};
const redux = (state = defaultState, action) => {
  switch (action.type) {
    case saveBook:
      return { ...state, books: state.books.concat(action.payload) };
    case storeBooks: return { ...state, page: 1 };
    case changeStatus:
      const temp = [].concat(state.books);
      for (let i = 0; i < temp.length; i += 1) {
        if (temp[i].id === action.id) {
          temp[i].status = ((temp[i].status === 'dislike') || (temp[i].status === null)) ? 'like' : 'dislike';
        }
      }
      return { ...state, books: temp };
    default: return state;
  }
};

export default redux;
