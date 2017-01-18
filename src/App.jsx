import React from 'react';
import ReactDOM from 'react-dom';

import './sass/app.scss';
import Neck from './components/neck/Neck.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="container">
        <Neck />
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
