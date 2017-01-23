import React from 'react';
import Note from '../note/Note.jsx';

function Fret({ fret, note, highlight, showOnHighlight }) {
  return (
    <div className="fret" data-fret={fret}>
      <Note note={note} highlight={highlight} showOnHighlight={showOnHighlight} />
    </div>
  );
}

Fret.propTypes = {
  fret: React.PropTypes.number.isRequired,
  note: React.PropTypes.string.isRequired,
  highlight: React.PropTypes.func.isRequired,
  showOnHighlight: React.PropTypes.bool.isRequired,
};

export default Fret;
