import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import './sass/app.scss';
import Neck from './components/neck/Neck.jsx';
import ScaleList from './components/scaleList/ScaleList.jsx';
import NoteFilterList from './components/note/NoteFilterList.jsx';
import { scales } from './utils/noteUtils';
import { SHOW_ONLY_HIGHLIGHTED_NOTES, SHOW_ALL_NOTES } from './constants/actions';
import { SET_VISIBILITY_FILTER } from './constants/actionTypes';
import fretly from './reducers/fretly';
import visibilityFilter from './reducers/visibilityFilter';

import { combineReducers, createStore } from 'redux'

const reducer = combineReducers({ visibilityFilter, fretly });
const store = createStore(reducer);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setScale = this.setScale.bind(this);
    this.clearScale = this.clearScale.bind(this);
    this.highlight = this.highlight.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);

    this.state = {
      scale: {},
      visibilityFilter: props.visibilityFilter,
    };
  }

  setScale(e, scale) {
    e.preventDefault();
    this.deactivateScales();
    this.setState({ scale: Object.assign(scale, { active: true }) });
  }

  clearScale(e) {
    e.preventDefault();
    this.deactivateScales();
    this.setState({ scale: {} });
  }

  deactivateScales() {
    const activeScale = _.find(scales, { active: true });

    if (activeScale) {
      activeScale.active = false;
    }
  }

  highlight(note) {
    return (_.indexOf(this.state.scale.notes, note) !== -1);
  }

  setVisibilityFilter(e, filter) {
    const action = { type: SET_VISIBILITY_FILTER, filter: filter };

    store.dispatch(action);
    this.setState({
      visibilityFilter: store.getState().visibilityFilter,
    });
  }

  render() {
    const scale = this.state.scale;
    const showOnHighlight = this.state.visibilityFilter === SHOW_ONLY_HIGHLIGHTED_NOTES;
    const filters = [SHOW_ALL_NOTES, SHOW_ONLY_HIGHLIGHTED_NOTES];

    return (
      <div id="container">
        <h1>Fretly</h1>
        <span>
          A work in progress proudly crafted by&nbsp;
          <a href="mailto:shane.vorachek@gmail.com">Shane Vorachek</a>
        </span>

        <ScaleList
          scales={scales}
          setScale={this.setScale}
          clearScale={this.clearScale}
          activeScale={scale}
        />

        <NoteFilterList
          setVisibilityFilter={this.setVisibilityFilter}
          activeFilter={this.state.visibilityFilter}
          filters={filters}
        />

        <Neck
          scale={scale}
          highlight={this.highlight}
          showOnHighlight={showOnHighlight}
        />
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <App {...store.getState()} />,
    document.getElementById('root')
  );
};

const unsubscribe = store.subscribe(render);

render();
