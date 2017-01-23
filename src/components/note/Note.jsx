import React from 'react';

function Note({ note, highlight, showOnHighlight }) {
  const classList = ['note'];
  const highlightNote = highlight(note);

  if (highlightNote) {
    classList.push('highlight');
  }

  if (showOnHighlight) {
    classList.push('show-on-highlight');
  }

  const renderNote = () => {
    if (showOnHighlight && !highlightNote) {
      return <span></span>;
    }

    return <span className={classList.join(' ')}>{note}</span>;
  };

  return renderNote();
}

Note.propTypes = {
  note: React.PropTypes.string.isRequired,
  highlight: React.PropTypes.func.isRequired,
  showOnHighlight: React.PropTypes.bool.isRequired,
};

export default Note;
