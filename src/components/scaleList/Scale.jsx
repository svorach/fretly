import React from 'react';

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
  scale: React.PropTypes.object,
  activeScale: React.PropTypes.object,
  setActiveScale: React.PropTypes.func,
});

export default Scale;
