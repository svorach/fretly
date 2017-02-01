import activeScale from './activeScale';
import activeMode from './activeMode';
import scales from './scales';
import visibilityFilter from './visibilityFilter';
import tuning from './tuning';
import selectedNotes from './selectedNotes';
import rootNote from './rootNote';
import { combineReducers } from 'redux';

export const fretly = combineReducers({
  tuning,
  activeScale,
  activeMode,
  scales,
  selectedNotes,
  rootNote,
  visibilityFilter,
});
