import React from 'react';
import PropTypes from 'prop-types';

function Note({ note, highlight, showOnHighlight, selectNote, isNoteSelected, isRootNote }) {
  const classList = ['note'];
  const highlightNote = highlight(note);
  const selectedNote = isNoteSelected(note);

  if (highlightNote) {
    classList.push('highlight');
  }

  if (showOnHighlight) {
    classList.push('show-on-highlight');
  }

  if (selectedNote) {
    classList.push('selected');
  }

  if (isRootNote) {
    classList.push('root');
  }

  const renderNote = () => {
    if (showOnHighlight && !highlightNote) {
      return <span></span>;
    }

    return (
      <a
        href=""
        onClick={(e) => selectNote(e, note)}
        className={classList.join(' ')}
      >
        {note}
      </a>
    );
  };

  return renderNote();
}

Note.propTypes = {
  note: PropTypes.string.isRequired,
  highlight: PropTypes.func.isRequired,
  showOnHighlight: PropTypes.bool.isRequired,
  selectNote: PropTypes.func.isRequired,
  isNoteSelected: PropTypes.func.isRequired,
  isRootNote: PropTypes.bool,
};

export default Note;
