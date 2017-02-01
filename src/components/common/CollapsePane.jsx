import React from 'react';
import PropTypes from 'prop-types';

const CollapsePane = ({ content, open }) =>
  <div className="pane collapsed">
    <h2>Scales</h2>
    {content}
    {open}
  </div>;

CollapsePane.propTypes = ({
  content: PropTypes.func,
  open: PropTypes.bool,
});

export default CollapsePane;
