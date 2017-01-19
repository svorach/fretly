import React from 'react';
import Fret from '../fret/Fret.jsx';

const String = ({ data, highlight }) => {
  const mapFrets = (fret, i) => <Fret note={fret} highlight={highlight} key={`fret-${i}`} />;
  const getFrets = (string) => string.frets.map(mapFrets);

  return (<div className="string">{getFrets(data)}</div>);
};

String.propTypes = {
  data: React.PropTypes.object,
  highlight: React.PropTypes.func,
};

export default String;
