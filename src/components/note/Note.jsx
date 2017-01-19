import React from 'react';

function Note({ note, highlight }) {
  const classList = ['note'];

  if (highlight(note)) {
    classList.push('highlight');
  }

  return <span className={classList.join(' ')}>{note}</span>;
}

Note.propTypes = {
  note: React.PropTypes.string,
  highlight: React.PropTypes.func,
};

export default Note;
