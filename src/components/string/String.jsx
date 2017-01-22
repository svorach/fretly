import React from 'react';
import Fret from '../fret/Fret.jsx';

const String = ({ data, highlight, showOnHighlight }) => {
  const mapFrets = (fret, i) => <Fret note={fret} highlight={highlight} showOnHighlight={showOnHighlight} key={`fret-${i}`} />;
  const getFrets = (string) => string.frets.map(mapFrets);

  return (<div className="string">{getFrets(data)}</div>);
};

String.propTypes = {
  data: React.PropTypes.object,
  highlight: React.PropTypes.func.isRequired,
  showOnHighlight: React.PropTypes.bool.isRequired,
};

export default String;
