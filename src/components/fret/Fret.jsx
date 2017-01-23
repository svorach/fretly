import React from 'react';
import Note from '../note/Note.jsx';

function Fret({ note, highlight, showOnHighlight }) {
  return (
    <div className="fret">
      <Note note={note} highlight={highlight} showOnHighlight={showOnHighlight} />
    </div>
  );
}

Fret.propTypes = {
  note: React.PropTypes.string.isRequired,
  highlight: React.PropTypes.func.isRequired,
  showOnHighlight: React.PropTypes.bool.isRequired,
};

export default Fret;
