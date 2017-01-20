import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import './sass/app.scss';
import Neck from './components/neck/Neck.jsx';
import ScaleList from './components/scaleList/ScaleList.jsx';
import { scales } from './utils/noteUtils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setScale = this.setScale.bind(this);
    this.clearScale = this.clearScale.bind(this);
    this.highlight = this.highlight.bind(this);

    this.state = {
      scale: {},
    };
  }

  setScale(e, scale) {
    e.preventDefault();
    this.deactivateScales();

    const nextScale = Object.assign(scale, { active: true });

    this.setState({ scale: nextScale });
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

  render() {
    const scale = this.state.scale;

    return (
      <div id="container">
        <h1>Fretly</h1>
        <span>A work in progress proudly crafted by <a href="mailto:shane.vorachek@gmail.com">Shane Vorachek</a></span><br />

        <ScaleList
          scales={scales}
          setScale={this.setScale}
          clearScale={this.clearScale}
          activeScale={scale}
        />

        <Neck scale={scale} highlight={this.highlight} />
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};

render();
