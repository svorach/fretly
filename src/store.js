import { createStore } from 'redux';
import { reducer } from './reducers/rootReducer';

export const store = createStore(reducer);
