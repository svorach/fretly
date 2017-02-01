import React from 'react';
import PropTypes from 'prop-types';

const Scale = ({ scale, activeScale, setActiveScale }) =>
  <li>
    <a
      href="#"
      className={scale.name === activeScale.name ? 'active' : ''}
      onClick={(e) => setActiveScale(e, scale)}
    >
      {scale.name}
    </a>
  </li>;

Scale.propTypes = ({
  scale: PropTypes.object,
  activeScale: PropTypes.object,
  setActiveScale: PropTypes.func,
});

export default Scale;
