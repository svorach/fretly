import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import tonal from 'tonal';

import './sass/app.scss';
import Neck from './components/neck/Neck.jsx';
import ScaleList from './components/scaleList/ScaleList.jsx';
import ChordList from './components/chordList/ChordList.jsx';

import NoteFilter from './components/note/NoteFilter.jsx';
import Control from './components/controls/Control.jsx';

import { store } from './store';

import {
  SHOW_ONLY_HIGHLIGHTED_NOTES,
  SHOW_ALL_NOTES,
} from './constants/actions';

import {
  SET_VISIBILITY_FILTER,
  SET_ACTIVE_SCALE,
  SET_STRINGS,
  SELECT_NOTE,
  SELECT_ROOT_NOTE,
  CLEAR_SCALE,
  CLEAR_NOTES,
  CLEAR_ROOT_NOTE,
  FIND_CHORD,
} from './constants/actionTypes';

import { TUNINGS } from './constants/tunings';

import { FRScale } from './utils/noteUtils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setActiveScale = this.setActiveScale.bind(this);
    this.highlight = this.highlight.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
    this.setTuning = this.setTuning.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.selectRootNote = this.selectRootNote.bind(this);
    this.isNoteSelected = this.isNoteSelected.bind(this);
    this.findScale = this.findScale.bind(this);
    this.findChord = this.findChord.bind(this);
    this.reset = this.reset.bind(this);

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

  getTunings(tunings) {
    const state = store.getState();

    return tunings.map((tuning, i) => {
      const className = state.tuning.name === tuning.name ? 'active' : '';

      return (
        <li key={`tuning-${i}`}>
          <a href="#" className={className} onClick={(e) => this.setTuning(e, tuning)}>
            {tuning.name}
          </a>
        </li>
      );
    });
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

    const state = store.getState();
    const noSelectedNotes = state.selectedNotes.length === 0;
    const shouldClearRoot = state.rootNote === note;

    if (noSelectedNotes) {
      this.selectRootNote(e, note);
    }

    if (shouldClearRoot) {
      store.dispatch({ type: CLEAR_ROOT_NOTE });
    }

    store.dispatch({ type: SELECT_NOTE, note });

    this.findChord(e);
  }

  findScale() {
    const state = store.getState();
    const rootNote = state.rootNote;
    const scale = state.activeScale.name;
    const notes = tonal.scale.get(scale, rootNote);
    const intervals = tonal.harmonics(notes);

    if (rootNote && scale) {
      store.dispatch({ type: CLEAR_SCALE });
      store.dispatch({ type: CLEAR_NOTES });
      store.dispatch({
        type: SET_ACTIVE_SCALE,
        scale: new FRScale({
          name: `${rootNote} ${scale}`,
          notes,
          intervals,
        }),
      });
    }
  }

  findChord(e) {
    e.preventDefault();

    const state = store.getState();
    const matches = tonal.chord.detect(state.selectedNotes.join(' '));
    const mapChords = (chord) => Object.assign({
      chord,
      notes: tonal.chord(chord),
    });

    if (matches.length) {
      const possibleChords = matches.map(mapChords);
      store.dispatch({ type: FIND_CHORD, possibleChords });
    }
  }

  selectRootNote(e, note) {
    e.preventDefault();

    store.dispatch({ type: SELECT_ROOT_NOTE, note });

    this.findScale();
  }

  reset(e) {
    e.preventDefault();

    store.dispatch({ type: CLEAR_SCALE });
    store.dispatch({ type: CLEAR_NOTES });
    store.dispatch({ type: CLEAR_ROOT_NOTE });
  }

  /** Where all the magic happens. */
  render() {
    const state = store.getState();
    const showOnHighlight = state.visibilityFilter === SHOW_ONLY_HIGHLIGHTED_NOTES;
    const filters = { SHOW_ALL_NOTES, SHOW_ONLY_HIGHLIGHTED_NOTES };
    const tunings = this.getTunings(TUNINGS);

    return (
      <section id="container">
        <header className="app-header">
          <div className="logo">Fretly <span className="version">pre-alpha</span></div>

          <h1 className="hero-text">
            <b>Modern Fretboard Visualization Tool</b><br />
            <em>Haphazardly Engineered</em> by &nbsp;
            <a href="mailto:svorach@gmail.com">Shane Vorachek</a>
          </h1>

          {/*
          <h1>Fretly</h1>
          A work in progress proudly crafted by&nbsp;
          <a href="mailto:shane.vorachek@gmail.com">Shane Vorachek</a>
          */}

          <nav className="controls">
            <NoteFilter
              setVisibilityFilter={this.setVisibilityFilter}
              visibilityFilter={state.visibilityFilter}
              filters={filters}
            />

            <Control text="Reset" onClick={this.reset} />
            <Control text="Reset" disabled={false} onClick={this.reset} />
            <Control text="Detect Scale" disabled onClick={(e) => e.preventDefault()} />
            <Control text="Suggest Next Chord" disabled onClick={(e) => e.preventDefault()} />
            <Control text="Suggest Key" disabled onClick={(e) => e.preventDefault()} />
            <Control text="Suggest Resolve" disabled onClick={(e) => e.preventDefault()} />
          </nav>
        </header>

        <section className="info-help">
          <div className="content-wrapper">
            <header>
              <p>
                Roadmap to stability and full planned feature list coming soon!
                For now, please have a look at the tips below.
                How you start depends on your needs.
                All feedback is welcome and greatly appreciated.
              </p>
            </header>

            <p>
              One of the most powerful things about Fretly is how extendable the chart is.
              Fretly is mobile first for extensive visual reference in your pocket, but quite useful
              on desktop for the writing musician as well.
            </p>

            <p>
              Fretly has a wide variety of uses and they all
              apply to any tuning, any number of strings.
              Bass players, 7, 8 and even 12 string guitars,
              banjoes, mandolins are all possible.
              Custom tunings will be coming very quickly but
              are already supported internally.
              Fretly was designed from the ground up to work
              with all fretted and stringed instruments.
            </p>

            <ul>
              <li>
                <b>Note Reference</b>
              </li>
              <li>
                <b>Scale Reference</b>
                <ol>
                  <li>Select a mode/scale from the list</li>
                  <li>Tap on a note to select a root and complete the "key"</li>
                  <li>You can filter out notes that are not in key using the controls below.</li>
                  <li>
                    Switch the
                  </li>
                </ol>
              </li>
              <li><b>Chord Discovery</b>
                <ol>
                  <li>Start by selecting a note without having a scale/mode selected.</li>
                  <li>Select another note.</li>
                  <li>It is possible a chord has already been found, if not try a third note.</li>
                  <li>If no chord found after four notes, resetting and trying again may help.</li>
                  <li>Chances are you just need to widen your intervals! (gap between notes)</li>
                  <li>Avoid chromatic selections (A, A#, B)</li>
                  <li>Storing chords coming soon.</li>
                  <li>Chord progression building coming soon.</li>
                </ol>
              </li>
            </ul>
          </div>
        </section>

        <div className="lists-container">
          <ScaleList
            scales={state.scales}
            setActiveScale={this.setActiveScale}
            clearScale={this.clearScale}
            activeScale={state.activeScale}
          />

          <div className="list-container">
            <h2>Tunings</h2>
            <ul className="list tunings-list">
              {tunings}
            </ul>
          </div>

          <ChordList chords={state.possibleChords} />

          <div className="list-container">
            <h2>Possible Scales</h2>
            <ul className="list intervals-list">
              <li>Soon!</li>
            </ul>
          </div>

          <div className="list-container">
            <h2>Intervals</h2>
            <ul className="list intervals-list">
              <li>Soon!</li>
            </ul>
          </div>
        </div>

        <Neck
          strings={state.tuning.strings}
          rootNote={state.rootNote}
          activeScale={this.activeScale}
          selectNote={this.selectNote}
          highlight={this.highlight}
          isNoteSelected={this.isNoteSelected}
          showOnHighlight={showOnHighlight}
        />
      </section>
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
