import React from 'react';
import Fret from '../fret/Fret.jsx';

const mapFrets = (fret, i) => <Fret data={fret} key={`fret-${i}`} />;
const getFrets = (string) => string.frets.map(mapFrets);
const String = ({ data }) =>
  (<div className="string">{getFrets(data)}</div>);

String.propTypes = {
  data: React.PropTypes.object,
};

export default String;
