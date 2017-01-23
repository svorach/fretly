import React from 'react';
import String from '../string/String.jsx';
import { neck } from '../../utils/neckUtils';

const Neck = ({ highlight, showOnHighlight }) => {
  const mapStrings = (string, i) =>
    <String
      data={string}
      highlight={highlight}
      showOnHighlight={showOnHighlight}
      key={`string-${i}`}
    />;

  return (
    <section className="neck-container">
      <section className="neck">{neck.map(mapStrings)}</section>
    </section>
  );
};

Neck.propTypes = {
  highlight: React.PropTypes.func.isRequired,
  showOnHighlight: React.PropTypes.bool.isRequired,
};

export default Neck;
