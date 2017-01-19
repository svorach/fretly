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

    scales[0].active = true;

    this.setScale = this.setScale.bind(this);
    this.highlight = this.highlight.bind(this);
    this.state = {
      scale: scales[0],
    };
  }

  setScale(e, scale) {
    e.preventDefault();

    const activeScale = _.find(scales, { active: true });
    const nextScale = Object.assign(scale, { active: true });

    activeScale.active = false;

    this.setState({ scale: nextScale });
  }

  highlight(note) {
    return (_.indexOf(this.state.scale.notes, note) !== -1);
  }

  render() {
    const scale = this.state.scale;

    return (
      <div id="container">
        <h1>Fretly</h1>
        <ScaleList scales={scales} setScale={this.setScale} activeScale={scale} />

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
