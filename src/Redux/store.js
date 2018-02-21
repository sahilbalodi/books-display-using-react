import { createStore } from 'redux';
import redux from './reducers';


const store = createStore(redux, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
