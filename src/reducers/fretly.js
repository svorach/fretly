import activeScale from './activeScale';
import scales from './scales';
import visibilityFilter from './visibilityFilter';
import tuning from './tuning';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  tuning,
  activeScale,
  scales,
  visibilityFilter,
});
