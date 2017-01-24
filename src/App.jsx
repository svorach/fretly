import React from 'react';
import ReactDOM from 'react-dom';

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
  SET_STRINGS,
} from './constants/actionTypes';

import { TUNINGS as tunings } from './constants/tunings';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setActiveScale = this.setActiveScale.bind(this);
    this.highlight = this.highlight.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
    this.setTuning = this.setTuning.bind(this);

    this.state = {
      tuning: props.tuning,
      activeScale: props.activeScale,
      scales: props.scales,
      visibilityFilter: props.visibilityFilter,
    };
  }

  setActiveScale(e, scaleToSet) {
    e.preventDefault();
    const action = {
      type: SET_ACTIVE_SCALE,
      scale: scaleToSet,
    };

    store.dispatch(action);
  }

  setTuning(e, tuning) {
    e.preventDefault();
    const action = { type: SET_STRINGS, tuning };

    store.dispatch(action);
  }

  setVisibilityFilter(e, filter) {
    e.preventDefault();
    const action = { type: SET_VISIBILITY_FILTER, filter };

    store.dispatch(action);
  }

  highlight(note) {
    return (store.getState().activeScale.notes.indexOf(note) !== -1);
  }

  render() {
    const state = store.getState();
    const showOnHighlight = state.visibilityFilter === SHOW_ONLY_HIGHLIGHTED_NOTES;
    const filters = { SHOW_ALL_NOTES, SHOW_ONLY_HIGHLIGHTED_NOTES };

    const getTunings = () =>
      tunings.map((tuning, i) =>
        <li key={`tuning-${i}`}>
          <a href="#" onClick={(e) => this.setTuning(e, tuning)}>
            {tuning.name}
          </a>
        </li>
      );

    return (
      <div id="container">
        <h1>Fretly</h1>
        <span>
          A work in progress proudly crafted by&nbsp;
          <a href="mailto:shane.vorachek@gmail.com">Shane Vorachek</a>
        </span>

        <ScaleList
          scales={state.scales}
          setActiveScale={this.setActiveScale}
          clearScale={this.clearScale}
          activeScale={state.activeScale}
        />

        <NoteFilter
          setVisibilityFilter={this.setVisibilityFilter}
          visibilityFilter={state.visibilityFilter}
          filters={filters}
        />

        <ul>
          {getTunings()}
        </ul>

        <Neck
          strings={state.tuning.strings}
          activeScale={this.activeScale}
          highlight={this.highlight}
          showOnHighlight={showOnHighlight}
        />
      </div>
    );
  }
}

App.propTypes = {
  tuning: React.PropTypes.object,
  visibilityFilter: React.PropTypes.string,
  activeScale: React.PropTypes.object,
  scales: React.PropTypes.array,
};

const render = () => {
  ReactDOM.render(
    <App {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);

render();
