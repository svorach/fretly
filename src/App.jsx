import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import './sass/app.scss';
import Neck from './components/neck/Neck.jsx';
import ScaleList from './components/scaleList/ScaleList.jsx';
import NoteFilter from './components/note/NoteFilter.jsx';
import activeScale from './reducers/activeScale';
import scales from './reducers/scales';
import visibilityFilter from './reducers/visibilityFilter';

import {
  SHOW_ONLY_HIGHLIGHTED_NOTES,
  SHOW_ALL_NOTES,
} from './constants/actions';

import {
  SET_VISIBILITY_FILTER,
  SET_ACTIVE_SCALE,
} from './constants/actionTypes';

import { combineReducers, createStore } from 'redux';

const reducer = combineReducers({ activeScale, scales, visibilityFilter });
const store = createStore(reducer);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setActiveScale = this.setActiveScale.bind(this);
    this.highlight = this.highlight.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);

    this.state = {
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

  setVisibilityFilter(e, filter) {
    e.preventDefault();
    const action = { type: SET_VISIBILITY_FILTER, filter };

    store.dispatch(action);
  }

  highlight(note) {
    return (store.getState().activeScale.notes.indexOf(note) !== -1);
  }

  render() {
    const showOnHighlight = this.state.visibilityFilter === SHOW_ONLY_HIGHLIGHTED_NOTES;
    const filters = { SHOW_ALL_NOTES, SHOW_ONLY_HIGHLIGHTED_NOTES };
    return (
      <div id="container">
        <h1>Fretly</h1>
        <span>
          A work in progress proudly crafted by&nbsp;
          <a href="mailto:shane.vorachek@gmail.com">Shane Vorachek</a>
        </span>

        <ScaleList
          scales={this.state.scales}
          setActiveScale={this.setActiveScale}
          clearScale={this.clearScale}
          activeScale={this.state.activeScale}
        />

        <NoteFilter
          setVisibilityFilter={this.setVisibilityFilter}
          visibilityFilter={this.state.visibilityFilter}
          filters={filters}
        />

        <Neck
          activeScale={this.activeScale}
          highlight={this.highlight}
          showOnHighlight={showOnHighlight}
        />
      </div>
    );
  }
}

App.propTypes = {
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
