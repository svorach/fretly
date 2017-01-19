import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import './sass/app.scss';
import Neck from './components/neck/Neck.jsx';
import { scales } from './utils/noteUtils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setScale = this.setScale.bind(this);
    this.highlight = this.highlight.bind(this);
    this.state = {
      scale: scales[0],
    };
  }

  setScale(e, index) {
    e.preventDefault();

    this.setState({ scale: scales[index] });
  }

  highlight(note) {
    return (_.indexOf(this.state.scale.notes, note) !== -1);
  }

  render() {
    return (
      <div id="container">
        <h1>Fretly</h1>

        <ul class="scale-list">
          <li><a href="" onClick={(e) => this.setScale(e, 0)}>C Major (Ionian)</a></li>
          <li><a href="" onClick={(e) => this.setScale(e, 1)}>B Lydian</a></li>
        </ul>

        <Neck scale={this.state.scale} highlight={this.highlight} />
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
