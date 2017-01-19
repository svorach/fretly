import React from 'react';
import Fret from '../fret/Fret.jsx';

const String = ({ data, highlightNote }) => {
  const mapFrets = (fret, i) => <Fret data={fret} highlightNote={highlightNote} key={`fret-${i}`} />;
  const getFrets = (string) => string.frets.map(mapFrets);

  return (<div className="string">{getFrets(data)}</div>);
};

String.propTypes = {
  data: React.PropTypes.object,
  highlightNote: React.PropTypes.func,
};

export default String;
