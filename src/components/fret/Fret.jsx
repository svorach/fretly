import React from 'react';
import PropTypes from 'prop-types';
import Note from '../note/Note.jsx';

/* FUTURE: Make fret marker into a component instead of a psuedo element.. */
function Fret({ fret, note, highlight, showOnHighlight, selectNote, isNoteSelected, isRootNote }) {
  return (
    <div className="fret" data-fret={fret}>
      <Note
        note={note}
        highlight={highlight}
        showOnHighlight={showOnHighlight}
        selectNote={selectNote}
        isNoteSelected={isNoteSelected}
        isRootNote={isRootNote}
      />
    </div>
  );
}

Fret.propTypes = {
  fret: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
  highlight: PropTypes.func.isRequired,
  showOnHighlight: PropTypes.bool.isRequired,
  selectNote: PropTypes.func.isRequired,
  isNoteSelected: PropTypes.func.isRequired,
  isRootNote: PropTypes.bool,
};

export default Fret;
