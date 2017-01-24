import React from 'react';

const Tuning = ({ tuning, activeTuning, setActiveTuning }) =>
  <li>
    <a
      href="#"
      className={tuning.name === activeTuning.name ? 'active' : ''}
      onClick={(e) => setActiveTuning(e, tuning)}
    >
      {tuning.name}
    </a>
  </li>;

Tuning.propTypes = ({
  tuning: React.PropTypes.object,
  activeTuning: React.PropTypes.object,
  setActiveTuning: React.PropTypes.func,
});

export default Tuning;
