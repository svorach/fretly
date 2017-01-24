import React from 'react';
import String from '../string/String.jsx';

const Neck = ({ strings, highlight, showOnHighlight }) => {
  const mapStrings = (string, i) =>
    <String
      data={string}
      highlight={highlight}
      showOnHighlight={showOnHighlight}
      key={`string-${i}`}
    />;

  return (
    <section className="neck-container">
      <section className="neck">{strings.map(mapStrings)}</section>
    </section>
  );
};

Neck.propTypes = {
  strings: React.PropTypes.array.isRequred,
  highlight: React.PropTypes.func.isRequired,
  showOnHighlight: React.PropTypes.bool.isRequired,
};

export default Neck;
