import React from 'react';
import PropTypes from 'prop-types';

const Control = ({ text, disabled, onClick }) =>
  <button
    onClick={(e) => onClick(e)}
    className={`control ${disabled ? 'disabled' : ''}`}
    disabled={disabled}
  >
    {text}
  </button>;

Control.propTypes = ({
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
});

export default Control;
