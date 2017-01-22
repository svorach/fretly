import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import './sass/app.scss';
import Neck from './components/neck/Neck.jsx';
import ScaleList from './components/scaleList/ScaleList.jsx';
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

    return (
      <div id="container">
        <h1>Fretly</h1>
        <span>
          A work in progress proudly crafted by
          <a href="mailto:shane.vorachek@gmail.com">Shane Vorachek</a>
        </span>

        <ScaleList
          scales={scales}
          setScale={this.setScale}
          clearScale={this.clearScale}
          activeScale={scale}
        />

        <h2>Filter</h2>
        <form>
          <label htmlFor="show-all">Show All Notes</label>
          <input type="radio" name="set-visibility-filter" onClick={(e) => this.setVisibilityFilter(e, SHOW_ALL_NOTES)} />
          <br />
          <label htmlFor="show-scale-notes">Only Show Scale Notes</label>
          <input type="radio" name="set-visibility-filter" onClick={(e) => this.setVisibilityFilter(e, SHOW_ONLY_HIGHLIGHTED_NOTES)} />
        </form>
        <br />

        <Neck scale={scale} highlight={this.highlight} showOnHighlight={showOnHighlight} />
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
