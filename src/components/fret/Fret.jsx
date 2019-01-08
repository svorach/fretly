import React from 'react';
import PropTypes from 'prop-types';

import Note from '../note/Note.jsx';
import Peg from './Peg.jsx';

/* FUTURE: Make fret marker into a component instead of a psuedo element.. */
const Fret = ({
  fret,
  note,
  highlight,
  showOnHighlight,
  selectNote,
  isNoteSelected,
  isRootNote,
  changeTuning,
  string,
}) => {
  if (fret === 0) {
    return (
      <div className="fret" data-fret={fret}>
        <Peg
          changeTuning={changeTuning}
        />
      </div>
    );
  }
  return (
    <div className="fret" data-fret={fret}>
      <Note
        string={string}
        note={note}
        highlight={highlight}
        showOnHighlight={showOnHighlight}
        selectNote={selectNote}
        isNoteSelected={isNoteSelected}
        isRootNote={isRootNote}
      />
    </div>
  );
};

Fret.propTypes = {
  fret: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
  highlight: PropTypes.func.isRequired,
  showOnHighlight: PropTypes.bool.isRequired,
  selectNote: PropTypes.func.isRequired,
  isNoteSelected: PropTypes.func.isRequired,
  isRootNote: PropTypes.bool,
  changeTuning: PropTypes.func.isRequired,
  string: PropTypes.object.isRequired,
};

export default Fret;
