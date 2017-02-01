import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import tonal from 'tonal';

import './sass/app.scss';
import Neck from './components/neck/Neck.jsx';
import ScaleList from './components/scaleList/ScaleList.jsx';
import NoteFilter from './components/note/NoteFilter.jsx';

import { store } from './store';

import {
  SHOW_ONLY_HIGHLIGHTED_NOTES,
  SHOW_ALL_NOTES,
} from './constants/actions';

import {
  SET_VISIBILITY_FILTER,
  SET_ACTIVE_SCALE,
  SET_ACTIVE_MODE,
  SET_STRINGS,
  SELECT_NOTE,
  SELECT_ROOT_NOTE,
  CLEAR_SCALE,
  CLEAR_NOTES,
} from './constants/actionTypes';

import { TUNINGS as tunings } from './constants/tunings';

import { normalizeNotes } from './utils/noteUtils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setActiveScale = this.setActiveScale.bind(this);
    this.setActiveMode = this.setActiveMode.bind(this);
    this.highlight = this.highlight.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
    this.setTuning = this.setTuning.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.selectRootNote = this.selectRootNote.bind(this);
    this.isNoteSelected = this.isNoteSelected.bind(this);
    this.findScale = this.findScale.bind(this);

    this.state = {
      tuning: props.tuning,
      activeScale: props.activeScale,
      scales: props.scales,
      visibilityFilter: props.visibilityFilter,
    };
  }

  /** Responsible for setting the state of the active scale. */
  setActiveScale(e, scaleToSet) {
    e.preventDefault();

    store.dispatch({
      type: SET_ACTIVE_SCALE,
      scale: scaleToSet,
    });
  }

  /** Responsible for setting the state of the active mode. */
  setActiveMode(e, modeToSet) {
    e.preventDefault();

    store.dispatch({
      type: SET_ACTIVE_MODE,
      scale: modeToSet,
    });

    this.findScale();
  }

  /** Responsible for setting the state of the tuning. */
  setTuning(e, tuning) {
    e.preventDefault();

    store.dispatch({ type: SET_STRINGS, tuning });
  }

  /** Responsible for setting the state of the visibility filter. */
  setVisibilityFilter(e, filter) {
    e.preventDefault();

    store.dispatch({ type: SET_VISIBILITY_FILTER, filter });
  }

  /** Responsible for highlighting a note if it falls within an active scale. Consider renaming. */
  highlight(note) {
    const activeScale = store.getState().activeScale;

    if (activeScale.notes) {
      return (activeScale.notes.indexOf(note) !== -1);
    }

    return false;
  }

  /** Responsible for allowing selected notes to highlight. Consider renaming. */
  isNoteSelected(note) {
    const selectedNotes = store.getState().selectedNotes;

    if (selectedNotes instanceof Array) {
      return (selectedNotes.indexOf(note) !== -1);
    }

    return false;
  }

  /** Calls the reducer to add the selected note to the state. */
  selectNote(e, note) {
    e.preventDefault();

    store.dispatch({ type: SELECT_NOTE, note });
    this.selectRootNote(e, note);
  }

  findScale() {
    const state = store.getState();
    const rootNote = state.rootNote;
    const mode = state.activeMode.name;

    let scale;

    if (rootNote && mode) {
      scale = {
        name: `${rootNote} ${mode}`,
        notes: tonal.scale.get(mode, rootNote),
      };

      scale.notes = normalizeNotes(scale.notes);

      store.dispatch({ type: CLEAR_SCALE });
      store.dispatch({ type: CLEAR_NOTES });
      store.dispatch({
        type: SET_ACTIVE_SCALE,
        scale,
      });
    }
  }

  selectRootNote(e, note) {
    e.preventDefault();

    store.dispatch({ type: SELECT_ROOT_NOTE, note });

    this.findScale();
  }

  /** Where all the magic happens. */
  render() {
    const state = store.getState();
    const showOnHighlight = state.visibilityFilter === SHOW_ONLY_HIGHLIGHTED_NOTES;
    const filters = { SHOW_ALL_NOTES, SHOW_ONLY_HIGHLIGHTED_NOTES };

    const getTunings = () =>
      tunings.map((tuning, i) => {
        const className = state.tuning.name === tuning.name ? 'active' : '';
        return (
          <li key={`tuning-${i}`}>
            <a href="#" className={className} onClick={(e) => this.setTuning(e, tuning)}>
              {tuning.name}
            </a>
          </li>
        );
      });

    return (
      <div id="container">
        <h1>Fretly</h1>
        <span>
          A work in progress proudly crafted by&nbsp;
          <a href="mailto:shane.vorachek@gmail.com">Shane Vorachek</a>
        </span>

        <ScaleList
          scales={state.scales}
          // setActiveScale={this.setActiveScale}
          setActiveScale={this.setActiveMode}
          clearScale={this.clearScale}
          // activeScale={state.activeMode}
          activeScale={state.activeMode}
        />

        <NoteFilter
          setVisibilityFilter={this.setVisibilityFilter}
          visibilityFilter={state.visibilityFilter}
          filters={filters}
        />

        <h2>Tunings</h2>
        <ul>
          {getTunings()}
        </ul>

        <Neck
          strings={state.tuning.strings}
          rootNote={state.rootNote}
          activeScale={this.activeScale}
          selectNote={this.selectNote}
          // selectNote={this.selectRootNote}
          highlight={this.highlight}
          isNoteSelected={this.isNoteSelected}
          showOnHighlight={showOnHighlight}
        />
      </div>
    );
  }
}

App.propTypes = {
  tuning: PropTypes.object,
  visibilityFilter: PropTypes.string,
  activeScale: PropTypes.object,
  scales: PropTypes.array,
};

const render = () => {
  ReactDOM.render(
    <App {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);

render();
