import React from 'react';
import PropTypes from 'prop-types';

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
  tuning: PropTypes.object,
  activeTuning: PropTypes.object,
  setActiveTuning: PropTypes.func,
});

export default Tuning;
