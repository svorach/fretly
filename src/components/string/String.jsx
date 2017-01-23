import React from 'react';
import Fret from '../fret/Fret.jsx';

const String = ({ data, highlight, showOnHighlight }) => {
  const mapFrets = (fret, i) =>
    <Fret
      fret={i}
      note={fret}
      highlight={highlight}
      showOnHighlight={showOnHighlight}
      key={`fret-${i}`}
    />;

  return (<div className="string">{data.frets.map(mapFrets)}</div>);
};

String.propTypes = {
  data: React.PropTypes.object,
  highlight: React.PropTypes.func.isRequired,
  showOnHighlight: React.PropTypes.bool.isRequired,
};

export default String;
