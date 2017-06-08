import activeScale from './activeScale';
import scales from './scales';
import visibilityFilter from './visibilityFilter';
import tuning from './tuning';
import selectedNotes from './selectedNotes';
import rootNote from './rootNote';
import possibleChords from './possibleChords';
import showHelp from './showHelp';
import { combineReducers } from 'redux';

export const fretly = combineReducers({
  tuning,
  activeScale,
  scales,
  selectedNotes,
  rootNote,
  showHelp,
  possibleChords,
  visibilityFilter,
});
