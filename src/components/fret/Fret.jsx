import React from 'react';
import Note from '../note/Note.jsx';

function Fret({ note, highlight }) {
  return (<div className="fret"><Note note={note} highlight={highlight} /></div>);
}

Fret.propTypes = {
  note: React.PropTypes.string,
  highlight: React.PropTypes.func,
};

export default Fret;
