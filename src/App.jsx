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
    this.highlightNote = this.highlightNote.bind(this);
    this.state = {
      scale: {},
    };
  }

  setScale(e, index) {
    e.preventDefault();

    this.setState({ scale: scales[index] });
  }

  highlightNote(note) {
    return (_.indexOf(this.state.scale.notes, note) !== -1);
  }

  render() {
    return (
      <div id="container">
        <a href="" onClick={(e) => this.setScale(e, 0)}>C Major (Ionian)</a>
        <a href="" onClick={(e) => this.setScale(e, 1)}>B Lydian</a>

        <Neck scale={this.state.scale} highlightNote={this.highlightNote} />
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
