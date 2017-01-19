import React from 'react';

const Scale = ({ scale, setScale }) =>
  <li>
    <a
      href="#"
      className={scale.active ? 'active' : ''}
      onClick={(e) => setScale(e, scale)}
    >
      {scale.name}
    </a>
  </li>;

Scale.propTypes = ({
  scale: React.PropTypes.object,
  setScale: React.PropTypes.func,
});

export default Scale;
