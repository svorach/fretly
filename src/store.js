import { createStore } from 'redux';
import { fretly } from './reducers/fretly';

export const store = createStore(fretly);
